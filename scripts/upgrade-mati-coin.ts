import { ethers, upgrades }  from "hardhat";
import { MatiCoinAddress } from "./contract-addresses";

async function main() {
  const MatiCoin = await ethers.getContractFactory("MatiCoinV2");
  await upgrades.upgradeProxy(MatiCoinAddress, MatiCoin);
  console.log("MatiCoin upgraded");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
