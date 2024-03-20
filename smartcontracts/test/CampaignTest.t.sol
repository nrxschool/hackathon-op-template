// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import {Campaign} from "../src/Campaign.sol";

contract CampaignTest is BaseSetup {
    // function setUp() public override {
    //     BaseSetup.setUp();
    // }

    // function testCreateCampaign() public {
    //     address creator = address(this);
    //     uint256 targetAmount = 1 ether;

    //     // vm.expectEmit(campaign, "CampaignCreated", creator, address(community), targetAmount);

    //     campaign.createCampaign(community.address, targetAmount);

    //     Campaign.CampaignData memory campaignData = campaign.campaigns(creator);
    //     assertEq(campaignData.owner, creator);
    //     assertEq(campaignData.community, community.address);
    //     assertEq(campaignData.targetAmount, targetAmount);
    //     assertEq(campaignData.raisedAmount, 0);
    //     assertTrue(campaignData.active);
    // }

    // function testDonate(address donor) public {
    //     address campaignAddress = address(this); // Assuming campaign is deployed before test
    //     uint256 donationAmount = 0.1 ether;
    //     uint256 expectedRaisedAmount = donationAmount;

    //     // vm.expectEmit(campaign, "DonationReceived", donor, donationAmount);

    //     payable(campaignAddress).transfer(donationAmount);

    //     Campaign.CampaignData memory campaignData = campaign.campaigns(campaignAddress);
    //     assertEq(campaignData.raisedAmount, expectedRaisedAmount);
    // }

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
