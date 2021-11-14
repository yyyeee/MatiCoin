import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@openzeppelin/hardhat-upgrades';


import * as tasks from "./tasks/interactions";

tasks.load();

module.exports = {
  solidity: "0.8.2",
};
