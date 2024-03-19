// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

contract MilestoneTest is BaseSetup {

    uint256 constant goal = 100;
    error ContractDisabled();

    function setUp() public override {
        BaseSetup.setUp();
    }

    function test_initialState() public {
        assertEq(milestone.owner(), controller);
        assertEq(milestone.goal(), goal);
        assertEq(milestone.goalAchieved(), false);
    }

    function test_donateLessThanGoal_shouldAccumulateBalance() public {
        milestone.donate{value: 99}();

        assertEq(address(milestone).balance, 99);
    }
    
    function test_twoDonatesLessThanGoal_shouldAccumulateBalance() public {
        milestone.donate{value: 50}();
        milestone.donate{value: 49}();

        assertEq(address(milestone).balance, 99);
    }

    function test_donateGoal_shouldSetTrueInGoalAchieved() public {
        milestone.donate{value: 100}();

        assertTrue(milestone.goalAchieved());
    }

    function test_donateMoreThanGoal_shouldSetTrueInGoalAchieved() public {
        milestone.donate{value: 101}();

        assertTrue(milestone.goalAchieved());
    }
    
    function test_donateGoal_shouldReleaseBalance() public {
        milestone.donate{value: 100}();

        assertEq(address(milestone).balance, 0);
    }
    
    function test_donateMoreThanGoal_shouldReleaseBalance() public {
        milestone.donate{value: 101}();

        assertEq(address(milestone).balance, 0);
    }
    
    function test_donateToGoalAchived_shouldRevertDonate() public {  
        milestone.donate{value: 100}();
        assertTrue(milestone.goalAchieved());
        
        vm.expectRevert(abi.encodeWithSelector(ContractDisabled.selector));
        milestone.donate{value: 45}();
    }
}
