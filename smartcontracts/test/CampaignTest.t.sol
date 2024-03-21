// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import {Campaign} from "../src/Campaign.sol";

contract CampaignTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function testCreateCampaign() public {
        Campaign campaign2;
        uint256 targetAmount = 10 ether;

        vm.startPrank(community2owner1);
        campaign2 = community2.addCampaign("Mega campanha 2024 para teste isolado", targetAmount);

        // vm.expectEmit(campaign, "CampaignCreated", creator, address(community), targetAmount);

        // Campaign.CampaignData memory campaignData = campaign2.campaigns(address(campaign2));

        // Campaign.CampaignData memory campaignData = campaign2.campaigns[address(campaign2)];

        assertTrue(campaign2.active());
        // console.log("This is a simple message");
        assertEq(campaign2.owner(), community2owner1);
        assertEq(campaign2.community(), address(community2));
        assertEq(campaign2.targetAmount(), targetAmount);
        assertEq(campaign2.raisedAmount(), 0);

        vm.stopPrank();
    }

    function testDonate() public {
        uint256 donationAmount = 0.1 ether;
        uint256 tax = donationAmount * 1 / 1000;
        uint256 expectedRaisedAmount = donationAmount - tax;

        vm.startPrank(donor1);
        // vm.expectEmit(campaign, "DonationReceived", donor, donationAmount);
        campaign.donate(donationAmount);

        // payable(campaignAddress).transfer(donationAmount);

        vm.stopPrank();

        // Campaign.CampaignData memory campaignData = campaign.campaigns(campaignAddress);
        assertEq(campaign.raisedAmount(), expectedRaisedAmount);
    }

    function testDirectDonate() public {
        uint256 donationAmount = 0.1 ether;
        uint256 tax = donationAmount * 1 / 1000;
        uint256 expectedRaisedAmount = donationAmount - tax;

        vm.startPrank(donor1);
        // vm.expectEmit(campaign, "DonationReceived", donor, donationAmount);
        // campaign.donate(donationAmount);

        payable(address(campaign)).transfer(donationAmount);

        vm.stopPrank();

        // Campaign.CampaignData memory campaignData = campaign.campaigns(campaignAddress);
        assertEq(campaign.raisedAmount(), expectedRaisedAmount);
    }

    // // Add more tests for other functions...

    // function testWithdrawFunds_InactiveCampaign(address campaignOwner) public {
    //     // ... (set up campaign with raised amount)

    //     vm.expectRevert("Campaign must be inactive to withdraw funds");
    //     campaign.withdrawFunds();
    // }

    // function testWithdrawFunds_Success(address campaignOwner) public {
    //     // ... (set up campaign with raised amount and set active to false)

    //     uint256 initialBalance = address(this).balance;
    //     uint256 raisedAmount = campaign.campaigns(campaignOwner).raisedAmount;

    //     campaign.withdrawFunds();

    //     assertEq(address(this).balance, initialBalance + raisedAmount);
    // }

    // Add more tests for transferToCommunityFunds and setIsActive...
}
