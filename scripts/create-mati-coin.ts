import { ethers, upgrades }  from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const MatiCoin = await ethers.getContractFactory("MatiCoin");
  const coin = await upgrades.deployProxy(MatiCoin);
  await coin.deployed();

  const Vesting = await ethers.getContractFactory("MatiCoinVesting");
  const vesting = await Vesting.deploy(coin.address);
  await coin.approve(vesting.address, await coin.totalSupply());

  console.log("MatiCoin deployed to:", coin.address);
  console.log("Vesting address:", vesting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
