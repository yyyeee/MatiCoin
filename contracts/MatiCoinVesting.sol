// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

interface IMatiCoin {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

contract MatiCoinVesting is Ownable {
    using SafeMath for uint256;
    IMatiCoin _matiCoin;
    uint256 _vestingPeriod;

    struct Vesting {
        uint256 amount;
        uint256 start;
        uint256 released;
    }

    mapping(address => Vesting) private _vestings;

    constructor(address matiCoinAddress) {
        _matiCoin = IMatiCoin(matiCoinAddress);
        _vestingPeriod = 30 * 24 * 3600;
    }

    function vest(address receiver, uint256 amount) public onlyOwner {
        require(receiver != address(0), "MatiCoinVesting: Cannot vest to 0 address");
        // Assumption for simplicity - one vesting at the time
        require(_vestings[receiver].amount == 0, "MatiCoinVesting: Cannot vest until receiver has vested tokens.");
        _vestings[receiver] = Vesting(
            amount, block.timestamp, 0
        );
        // Is it possible without allowance? 
        _matiCoin.transferFrom(owner(), address(this), amount);
    }

    function availableVestingBalance() public view returns (uint256) {
        return _calculateAvailableBalance(_vestings[msg.sender]);
    }

    function totalVestingBalance() public view returns (uint256) {
        Vesting memory vesting = _vestings[msg.sender];
        return vesting.amount.sub(vesting.released);
    }

    function claim(uint256 amount) public {
        require(amount > 0, "MatiCoinVesting: 0 tokens cannot be claimed.");
        Vesting storage vesting = _vestings[msg.sender];
        uint256 currentBalance = _calculateAvailableBalance(vesting);
        require(currentBalance >= amount, "MatiCoinVesting: Tokens not available.");
        uint256 totalReleased = vesting.released + amount;
        if (totalReleased == vesting.amount) {
            delete _vestings[msg.sender];
        } else {
            _vestings[msg.sender].released = totalReleased;
        }
        _matiCoin.transfer(msg.sender, amount);
    }

    function _calculateAvailableBalance(Vesting memory vesting) private view returns (uint256) {
        uint256 amount = vesting.amount;
        if (amount == 0) {
            return 0;
        }
        if (vesting.start.add(_vestingPeriod) <= block.timestamp) {
            return vesting.amount.sub(vesting.released);
        }
        uint256 claimableAmount = (block.timestamp.sub(vesting.start)).mul(amount).div(_vestingPeriod);
        uint256 toClaimAmount = claimableAmount.sub(vesting.released);
        return toClaimAmount;
    }
}