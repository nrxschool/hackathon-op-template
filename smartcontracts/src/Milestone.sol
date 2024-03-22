// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

error ContractDisabled();
error DateOutOfRange();
error OnlyOwnerCaller();

contract Milestone {
    uint256 public balance;
    address public immutable owner;
    uint256 public immutable finalMilestone;

    address[] public donors;
    mapping(address => uint256) public donationHistory;

    uint256 immutable startDate;
    uint256 immutable endDate;

    MileUnit[4] public milestones;

    constructor(uint256 _goal, uint256 _startDate, uint256 _endDate) {
        owner = msg.sender;
        milestones[0] = MileUnit(_goal * 10 / 100, false); // %10
        milestones[1] = MileUnit(_goal * 25 / 100, false); // 10 + 25 = 35%
        milestones[2] = MileUnit(_goal * 35 / 100, false); // 35 + 35 = 70%
        milestones[3] = MileUnit(_goal * 30 / 100, false); // 70 + 30 = 100%
        finalMilestone = _goal;
        startDate = _startDate;
        endDate = _endDate;
    }

    function donate() public payable {
        if (getGoalAchieved(3)) revert ContractDisabled();
        if (block.timestamp > endDate || block.timestamp < startDate) revert DateOutOfRange();

        for (uint8 index = 0; index < milestones.length; index++) {
            if (getGoalAchieved(index)) continue;

            if (address(this).balance >= milestones[index].value) {
                milestones[index].goalAchieved = true;

                (bool success, ) = payable(owner).call{                     
                    value: index == 3 ? address(this).balance : milestones[index].value
                }("");

                if (!success) revert();
            }
        }

        balance += msg.value;
        donors.push(msg.sender);
        donationHistory[msg.sender] += msg.value;
    }

    function getGoalAchieved(uint8 index) public view returns(bool) {
        return milestones[index].goalAchieved;
    }

    function refund() public {
        if (owner != msg.sender) revert OnlyOwnerCaller();

        for (uint256 index; index < donors.length; index++) {
            payable(donors[index]).call{                     
                value: donationHistory[donors[index]]
            }("");
        }
    }

    receive() external payable {
        donate();
    }

    fallback() external payable {
        donate();
    }

    struct MileUnit {
        uint256 value;
        bool goalAchieved;
    }
}
