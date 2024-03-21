// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import "../src/Community.sol";

contract CommunityTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function testCreateCampaign_Sucess() public {
        Campaign campaign2;
        uint256 targetAmount = 20 ether;

        vm.startPrank(community2owner1);
        campaign2 = community2.addCampaign{value:0.001 ether}("Super campanha 2024 para teste de comunidade", targetAmount);


        assertTrue(campaign2.active());
        // console.log("This is a simple message");
        assertEq(campaign2.owner(), community2owner1);
        assertEq(campaign2.community(), address(community2));
        assertEq(campaign2.targetAmount(), targetAmount);
        assertEq(campaign2.raisedAmount(), 0);

        vm.stopPrank();
    }

    function testCreateCampaign_FailValue() public {
        Campaign campaign2;
        uint256 targetAmount = 20 ether;

        vm.startPrank(community2owner1);
        vm.expectRevert("Minimal Funds to Create Campaign not acchieved");
        campaign2 = community2.addCampaign{value:0.0000001 ether}("Mini campanha 2024 para teste de comunidade", targetAmount);


        vm.stopPrank();
    }

    // Add more tests for other Community contract functions...
}
