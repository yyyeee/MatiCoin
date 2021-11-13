import { BigNumber } from "@ethersproject/bignumber";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { MatiCoin } from "~/typings/MatiCoin";
import { WETH } from "~/typings/WETH";
import { parseEther } from "./utils";

describe("MatiCoin contract", function () {
  let Token;
  let WETH;
  let weth: WETH;
  let matiCoin: MatiCoin;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;
  let addrs: SignerWithAddress[];

  beforeEach(async function () {
    WETH = await ethers.getContractFactory("WETH");
    Token = await ethers.getContractFactory("MatiCoin");
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    weth = await WETH.deploy() as WETH;
    matiCoin = await Token.deploy() as MatiCoin;
    // matiCoin = await Token.deploy(weth.address) as MatiCoin;
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await matiCoin.owner()).to.equal(owner.address);
      expect(await weth.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await matiCoin.balanceOf(owner.address);
      expect(await matiCoin.totalSupply()).to.equal(ownerBalance);
    });
  });
  
  describe("Minting", function () {
    it("Should mint tokens to account", async function () {
      await matiCoin["mint(address,uint256)"](addr1.address, 50);
      const addr1Balance = await matiCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);
    });
  });
  
  describe("External Minting", function () {
    it("Should mint tokens using ether", async function () {
      await matiCoin.connect(addr1)["mint()"]({ value: parseEther(300) });
      const addr1Balance = await matiCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(parseEther(300));
    });
    
    it("Should add eth to contract", async function () {
      await matiCoin.connect(addr1)["mint()"]({ value: parseEther(300) });
      const matiCoinBalance = await ethers.provider.getBalance(matiCoin.address);
      expect(matiCoinBalance).to.eq(parseEther(300));
    });
  });
  
  describe("Withdrawal", function () {
    it("Should be able to withdraw when minted amount", async function () {
      const initialBalance = await owner.getBalance();
      await matiCoin.connect(addr1)["mint()"]({ value: parseEther(300) });
      await expect(() => matiCoin.connect(owner).withdraw(parseEther(300))).to.changeEtherBalance(owner, parseEther(300));
    });

    it("Should not be able to withdraw when not onwer", async function () {
      await matiCoin.connect(addr1)["mint()"]({ value: parseEther(300) });
      await expect(
        matiCoin.connect(addr1).withdraw(parseEther(1))
      ).to.be.revertedWith("Ownable: caller is not the owner");
    });
    
    it("Should not be able to witgdraw when ETH not available", async function () {
      await expect(
        matiCoin.connect(owner).withdraw(parseEther(1))
      ).to.be.revertedWith("Transaction reverted: function call failed to execute");
    });
    
    it("Should not be able to witgdraw when Tokens not available", async function () {
      await matiCoin.connect(owner).transfer(addr1.address, await matiCoin.totalSupply());
      await expect(
        matiCoin.connect(owner).withdraw(parseEther(1))
      ).to.be.revertedWith("MatiCoin: Tokens not available");
    });
  });

  describe("Transactions", function () {
    it("Should transfer tokens between accounts", async function () {
      await matiCoin.transfer(addr1.address, 50);
      const addr1Balance = await matiCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      await matiCoin.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await matiCoin.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    it("Should fail if sender doesn’t have enough tokens", async function () {
      const initialOwnerBalance = await matiCoin.balanceOf(owner.address);

      await expect(
        matiCoin.connect(addr1).transfer(owner.address, 1)
      ).to.be.revertedWith("ERC20: transfer amount exceeds balance");

      expect(await matiCoin.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });

    it("Should update balances after transfers", async function () {
      const initialOwnerBalance = await matiCoin.balanceOf(owner.address);

      await matiCoin.transfer(addr1.address, 100);

      await matiCoin.transfer(addr2.address, 50);

      const finalOwnerBalance = await matiCoin.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance.sub(150));

      const addr1Balance = await matiCoin.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);

      const addr2Balance = await matiCoin.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});