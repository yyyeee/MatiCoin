import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MatiCoin } from "~/typings/MatiCoin";
import { MatiCoinVesting } from "~/typings/MatiCoinVesting";
import { WETH } from "~/typings/WETH";
import { increaseTime, ZERO_ADDRESS } from "./utils";

describe("MatiCoinVesting contract", function () {
  let Token;
  let Vesting;
  let WETH;
  let weth: WETH;
  let matiCoin: MatiCoin;
  let vesting: MatiCoinVesting;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  const vestingPeriod = 30 * 24 * 3600;

  const halfPeriod = vestingPeriod / 2;

  beforeEach(async function () {
    WETH = await ethers.getContractFactory("WETH");
    Token = await ethers.getContractFactory("MatiCoin");
    Vesting = await ethers.getContractFactory("MatiCoinVesting");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    weth = await WETH.deploy() as WETH;
    matiCoin = await Token.deploy() as MatiCoin;
    // matiCoin = await Token.deploy(weth.address) as MatiCoin;
    vesting = await Vesting.deploy(matiCoin.address) as MatiCoinVesting;
    await matiCoin.approve(vesting.address, await matiCoin.totalSupply());
  });

  describe("Deployment", function () {
    it("Should set the right owners", async function () {
      expect(await matiCoin.owner()).to.equal(owner.address);
      expect(await vesting.owner()).to.equal(owner.address);
    });
    it("Should set maximum allowance", async function () {
      expect(await matiCoin.allowance(owner.address, vesting.address)).to.equal(await matiCoin.totalSupply());
    });
  });

  describe("Checking Balance", function () {
    it("Should have no tokens available right after vesting", async function () {
      await vesting.vest(addr1.address, 50);
      const addrVestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(addrVestingBalance).to.equal(0);
    });

    it("Should have 0 balance when no vesting", async function () {
      const vestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(vestingBalance).to.equal(0);
    });

    it("Should have half balance when half of vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(halfPeriod);
      const vestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(vestingBalance).to.equal(25);
    });

    it("Should have full balance availble when full vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod);
      const vestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(vestingBalance).to.equal(50);
    });

    it("Should have 50 balance when more than full vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod * 2);
      const vestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(vestingBalance).to.equal(50);
    });

    it("Should get 0 balances when no vesting", async function () {
      const vestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(vestingBalance).to.equal(0);
      const totalVestingBalance = await vesting.connect(addr1).totalVestingBalance();
      expect(totalVestingBalance).to.equal(0);
    });

    it("Should have available half tokens when half was claimed", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod);
      await vesting.connect(addr1).claim(25);
      const availableVestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(availableVestingBalance).to.equal(25);
      const totalVestingBalance = await vesting.connect(addr1).totalVestingBalance();
      expect(totalVestingBalance).to.equal(25);
    });
  });

  describe("Vesting", function () {
    it("Should not allow to vest other user than owner", async function () {
      await expect(
        vesting.connect(addr1).vest(addr2.address, 10)
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
    
    it("Should not allow to vest to 0 address", async function () {
      await expect(
        vesting.vest(ZERO_ADDRESS, 10)
      ).to.be.revertedWith("MatiCoinVesting: Cannot vest to 0 address");
    });

    it("Should vest tokens to account", async function () {
      await vesting.vest(addr1.address, 50);
      const vestingBalance = await matiCoin.balanceOf(vesting.address);
      expect(vestingBalance).to.equal(50);
      const addrVestingBalance = await vesting.connect(addr1).totalVestingBalance();
      expect(addrVestingBalance).to.equal(50);
    });

    it("Should not allow to add second vesting to same address", async function () {
      await vesting.vest(addr1.address, 50);

      await expect(
        vesting.vest(addr1.address, 50)
      ).to.be.revertedWith("MatiCoinVesting: Cannot vest until receiver has vested tokens.");
    });
  });

  describe("Claiming", function () {
    it("Should not allow to claim 0", async function () {
      await expect(
        vesting.connect(addr1).claim(0)
      ).to.be.revertedWith("MatiCoinVesting: 0 tokens cannot be claimed.");
    });

    it("Should not be able to claim more than full vesting after any time", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod * 100);
      await expect(
        vesting.connect(addr1).claim(51)
      ).to.be.revertedWith("MatiCoinVesting: Tokens not available.");
    });

    it("Should not be able to claim full vesting after not full time", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod - 1000);
      await expect(
        vesting.connect(addr1).claim(50)
      ).to.be.revertedWith("MatiCoinVesting: Tokens not available.");
    });

    it("Should be able to claim half after half time", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(halfPeriod);
      await vesting.connect(addr1).claim(25);
      const vestingBalance = await matiCoin.connect(vesting.address).balanceOf(vesting.address);
      expect(vestingBalance).to.equal(25);
      const userBalance = await matiCoin.connect(addr1).balanceOf(addr1.address);
      expect(userBalance).to.equal(25);
    });

    it("Should be able to claim full vesting after full time", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod);
      await vesting.connect(addr1).claim(50);
      const vestingBalance = await matiCoin.connect(vesting.address).balanceOf(vesting.address);
      expect(vestingBalance).to.equal(0);
      const userBalance = await matiCoin.connect(addr1).balanceOf(addr1.address);
      expect(userBalance).to.equal(50);
    });

    it("Should not be able to claim any vesting after full time if already claimed all", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(vestingPeriod);
      await vesting.connect(addr1).claim(50);
      await expect(
        vesting.connect(addr1).claim(1)
      ).to.be.revertedWith("MatiCoinVesting: Tokens not available.");
    });

    it("Should be able to claim multiple times to get available tokens", async function () {
      await vesting.vest(addr1.address, 50);
      increaseTime(halfPeriod);
      await vesting.connect(addr1).claim(5);
      await vesting.connect(addr1).claim(5);
      await vesting.connect(addr1).claim(5);
      await vesting.connect(addr1).claim(5);
      await vesting.connect(addr1).claim(5);
      const userBalance = await matiCoin.connect(addr1).balanceOf(addr1.address);
      expect(userBalance).to.equal(25);
      const availableVestingBalance = await vesting.connect(addr1).availableVestingBalance();
      expect(availableVestingBalance).to.equal(0);
      const totalVestingBalance = await vesting.connect(addr1).totalVestingBalance();
      expect(totalVestingBalance).to.equal(25);
    });
  });
});