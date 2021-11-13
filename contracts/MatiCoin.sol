// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "./WETH.sol";

// contract MatiCoin is ERC20, Ownable {
//     WETH _weth;

//     constructor(address wethAddress) ERC20("MatiCoin", "MaCo") {
//         _mint(msg.sender, 1000 * 10 ** decimals());
//         _weth = WETH(wethAddress);
//     }

//     function mint(address to, uint256 amount) public onlyOwner {
//         _mint(to, amount);
//     }

//     function mint() external payable {
//         _mint(msg.sender, 10 * msg.value);
//         _weth.mint();
//     }
// }

contract MatiCoin is ERC20, Ownable {
    constructor() ERC20("MatiCoin", "MaCo") {
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