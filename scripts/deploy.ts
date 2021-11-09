import { run, ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("MatiCoin");
  const Vesting = await ethers.getContractFactory("MatiCoinVesting");
  const token = await Token.deploy();
  const vesting = await Vesting.deploy(token.address);
  await token.approve(vesting.address, await token.totalSupply());

  console.log("Token address:", token.address);
  console.log("Vesting address:", vesting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
