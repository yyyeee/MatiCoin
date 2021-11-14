// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract MatiCoin is ERC20Upgradeable, OwnableUpgradeable {
    function initialize() initializer public {
        __ERC20_init("MatiCoin", "MaCo");
        __Ownable_init();
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function mint() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(balanceOf(msg.sender) > amount, "MatiCoin: Tokens not available");
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(amount);
    }
}