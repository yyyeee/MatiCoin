// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface IMatiCoin {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract MatiCoinVesting is Ownable {
    using SafeMath for uint256;
    IMatiCoin _matiCoin;
    uint256 _duration;

    struct Vesting {
        uint256 amount;
        uint256 start;
        uint256 released;
    }

    mapping(address => Vesting) private _vestings;

    constructor(address matiCoinAddress, uint256 duration) {
        _matiCoin = IMatiCoin(matiCoinAddress);
        _duration = duration;
    }

    function vest(address to, uint256 amount) public onlyOwner {
        require(_vestings[to].amount == 0, "Vesting for address already created."); 
        _vestings[to] = Vesting(
            amount, block.timestamp, 0
        );
        _matiCoin.transferFrom(owner(), address(this), amount);
    }

    function vestingBalance() external view returns (uint256) {
        Vesting storage vesting = _vestings[msg.sender];
        uint256 amount = vesting.amount;
        if (amount == 0) {
            return 0;
        }
        if (vesting.start.add(_duration) <= block.timestamp) {
            return vesting.amount.sub(vesting.released);
        }
        console.log(amount);
        console.log(vesting.start);
        uint256 claimableAmount = (block.timestamp.sub(vesting.start)).mul(amount).div(_duration);
        console.log(claimableAmount);
        uint256 toClaimAmount = claimableAmount.sub(vesting.released);
        return toClaimAmount;
    }

    function claim(uint256 amount) public {
        
        // checkBalance
        // takeFromVesting 
        // _vestedAccounts[to].cleanup
    }
}