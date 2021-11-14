import { task } from "hardhat/config";
import { MatiCoin } from "~/typings/MatiCoin";
import { MatiCoinV2 } from "~/typings/MatiCoinV2";
import { MatiCoinAddress } from "../scripts/contract-addresses";

export function load() {
  task("mint")
    .addParam("amount", "The amount to mint")
    .addParam("address", "The address to mint tokens")
    .setAction(async (taskArgs, hre) => {
      const matiCoin = (await hre.ethers.getContractAt(
        "MatiCoin",
        MatiCoinAddress
      )) as MatiCoin;
      const owner = await matiCoin.owner();
      const signer = await hre.ethers.getSigner(owner);
      await matiCoin.connect(signer)["mint(address,uint256)"](taskArgs.address, taskArgs.amount);
      console.log((await matiCoin.totalSupply()).toString());
    });
  task("balanceOf")
    .addParam("address", "The address to check")
    .setAction(async (taskArgs, hre) => {
      const matiCoin = (await hre.ethers.getContractAt(
        "MatiCoin",
        MatiCoinAddress
      )) as MatiCoin;
      console.log((await matiCoin.balanceOf(taskArgs.address)).toString());
    });
  task("totalSupply")
    .setAction(async (taskArgs, hre) => {
      const matiCoin = (await hre.ethers.getContractAt(
        "MatiCoin",
        MatiCoinAddress
      )) as MatiCoin;
      console.log((await matiCoin.totalSupply()).toString());
    });
  task("hello")
    .setAction(async (taskArgs, hre) => {
      const matiCoin = (await hre.ethers.getContractAt(
        "MatiCoinV2",
        MatiCoinAddress
      )) as MatiCoinV2;
      console.log(await matiCoin.sayHello());
    });
}
