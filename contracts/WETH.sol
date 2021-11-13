// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

contract WETH is ERC20, Ownable {
    constructor() ERC20("Wrapped Ether", "WETH") {}

    function mint() external payable {
        _mint(msg.sender, msg.value);
    }

    function burn(uint amount) external {
        payable(msg.sender).transfer(amount);
        _burn(msg.sender, amount);
    }
}