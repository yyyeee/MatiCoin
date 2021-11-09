import { ethers } from "hardhat";

export async function increaseTime(seconds: number) {
  await ethers.provider.send("evm_increaseTime", [seconds]);
  await ethers.provider.send("evm_mine", []);
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
