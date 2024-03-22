// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

contract MilestoneTest is BaseSetup {

    error ContractDisabled();
    error OnlyOwnerCaller();

    uint256 constant firstMilestone = 10;
    uint256 constant secondMilestone = 35;
    uint256 constant thirdMilestone = 70;
    uint256 constant finalMilestone = 100;

    uint256 constant initialValueFromUtils = 10000 ether;
    
    function setUp() public override {
        BaseSetup.setUp();
    }

    function test_initialState() public {
        assertEq(myContract.owner().balance, initialValueFromUtils);
        assertEq(myContract.owner(), controller);
        assertEq(myContract.finalMilestone(), finalMilestone);
        assertEq(myContract.getGoalAchieved(3), false);
    }

    function test_donateLessThanFirstMilestone_contractAccumulateBalance() public {
        myContract.donate{value: 9}();

        assertEq(address(myContract).balance, 9);
        assertEq(controller.balance, initialValueFromUtils);
        assertFalse(myContract.getGoalAchieved(0));
    }
    
    function test_donateMoreThanFirstMilestone_releaseFirstMilestone() public {
        // given
        uint256 donation = 30;

        // when
        myContract.donate{value: donation}();

        // then
        assertEq(address(myContract).balance, 20);
        assertEq(controller.balance, initialValueFromUtils + firstMilestone);
        assertTrue(myContract.getGoalAchieved(0));
        assertFalse(myContract.getGoalAchieved(1));
    }
    
    function test_donateMoreThanSecondMilestone_releaseFirstTwoMilestone() public {
        // given
        uint256 donation = 50;

        // when
        myContract.donate{value: donation}();

        // then
        assertEq(address(myContract).balance, donation - secondMilestone);
        assertEq(controller.balance, initialValueFromUtils + secondMilestone);
        assertTrue(myContract.getGoalAchieved(1));
        assertFalse(myContract.getGoalAchieved(2));
    }
    
    function test_donateMoreThanThirdMilestone_releaseFirstThreeMilestone() public {
        // given
        uint256 donation = 80;

        // when
        myContract.donate{value: donation}();

        // then
        assertEq(address(myContract).balance, donation - thirdMilestone);
        assertEq(controller.balance, initialValueFromUtils + thirdMilestone);
        assertTrue(myContract.getGoalAchieved(2));
        assertFalse(myContract.getGoalAchieved(3));
    }
    
    function test_donateMoreThanFinalMilestone_releaseFullBalance() public {
        // given
        uint256 donation = 100;

        // when
        myContract.donate{value: donation}();

        // then
        assertEq(address(myContract).balance, 0);
        assertEq(controller.balance, initialValueFromUtils + finalMilestone);
        assertTrue(myContract.getGoalAchieved(3));
    }

    function test_updateBalance_afterReceiveFunds() public {
         myContract.donate{value: 100000}();

         assertEq(myContract.balance(), 100000);
    }

    function test_donateToMilestoneAchived_revertDonate() public {  
        myContract.donate{value: finalMilestone}();

        vm.expectRevert(abi.encodeWithSelector(ContractDisabled.selector));
        myContract.donate{value: 42}();
    }

    function test_notOwnerCallRefund_ignoreRefund() public {
        vm.expectRevert(abi.encodeWithSelector(OnlyOwnerCaller.selector));
        myContract.refund();
    }
    
    function test_onlyOwnerCanCallRefund_Refund() public {
        vm.prank(controller);
        myContract.refund();
    }
}
