// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

// import "./WETH.sol";

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

contract MatiCoinV2 is ERC20Upgradeable, OwnableUpgradeable {
    function initialize() initializer public {
        __ERC20_init("MatiCoin", "MaCo");
        _mint(msg.sender, 1000 * 10 ** decimals());
    }

    function mint() external payable {
        _mint(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) external onlyOwner {
        require(balanceOf(msg.sender) > amount, "MatiCoin: Tokens not available");
        _burn(msg.sender, amount);
        payable(msg.sender).transfer(amount);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function sayHello() pure external returns (string memory) {
        return "Czesc";
    }
}
