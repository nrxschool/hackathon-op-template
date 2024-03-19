// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

error ContractDisabled();

contract Milestone {
    address public owner;
    uint256 public goal;
    bool public goalAchieved;

    constructor(uint256 _goal) {
        owner = msg.sender;
        goal = _goal;
    }

    receive() external payable {
        if (goalAchieved) revert ContractDisabled();
        if (address(this).balance >= goal) {
            (bool success, ) = payable(owner).call{ value: address(this).balance }("");
            if (success) {
                goalAchieved = true;
            } else {
                revert();
            }
        }
    }
}
