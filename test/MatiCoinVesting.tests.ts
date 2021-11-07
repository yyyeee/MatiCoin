import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MatiCoin } from "~/typings/MatiCoin";
import { MatiCoinVesting } from "~/typings/MatiCoinVesting";

describe("MatiCoin contract", function () {
  let Token;
  let Vesting;
  let matiCoin: MatiCoin;
  let vesting: MatiCoinVesting;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async function () {
    Token = await ethers.getContractFactory("MatiCoin");
    Vesting = await ethers.getContractFactory("MatiCoinVesting");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    matiCoin = await Token.deploy() as MatiCoin;
    vesting = await Vesting.deploy(matiCoin.address, 1000) as MatiCoinVesting;
    await matiCoin.approve(vesting.address, await matiCoin.totalSupply());
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await matiCoin.owner()).to.equal(owner.address);
      expect(await vesting.owner()).to.equal(owner.address);
    });
  });
  
  describe("Vesting", function () {
    it("Should vest tokens to account", async function () {
      await vesting.vest(addr1.address, 50);
      const vestingBalance = await matiCoin.balanceOf(vesting.address);
      expect(vestingBalance).to.equal(50);
    });

    it("Should not allow to add second vesting to same address", async function () {
      await vesting.vest(addr1.address, 50);
      const vestingBalance = await matiCoin.balanceOf(vesting.address);
      expect(vestingBalance).to.equal(50);

      await expect(
        vesting.vest(addr1.address, 50)
      ).to.be.revertedWith("Vesting for address already created.");
    });

    it("Should have 0 balance after vesting", async function () {
      await vesting.vest(addr1.address, 50);
      const vestingBalance = await vesting.connect(addr1).vestingBalance();
      expect(vestingBalance).to.equal(0);
    });

    it("Should have 0 balance when no vesting", async function () {
      const vestingBalance = await vesting.connect(addr1).vestingBalance();
      expect(vestingBalance).to.equal(0);
    });

    it("Should have 25 balance when after half of vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      changeTime(500);
      const vestingBalance = await vesting.connect(addr1).vestingBalance();
      expect(vestingBalance).to.equal(25);
    });

    it("Should have 50 balance when after full vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      changeTime(1000);
      const vestingBalance = await vesting.connect(addr1).vestingBalance();
      expect(vestingBalance).to.equal(50);
    });

    it("Should have 50 balance when after more than full vesting period", async function () {
      await vesting.vest(addr1.address, 50);
      changeTime(2000);
      const vestingBalance = await vesting.connect(addr1).vestingBalance();
      expect(vestingBalance).to.equal(50);
    });
  });
});

async function changeTime(seconds: number) {
  await ethers.provider.send('evm_increaseTime', [seconds]);
  await ethers.provider.send('evm_mine', []);
}