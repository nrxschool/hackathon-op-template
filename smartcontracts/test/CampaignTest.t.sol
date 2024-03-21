// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import {Campaign} from "../src/Campaign.sol";
import "forge-std/console.sol";

contract CampaignTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function testCreateCampaign() public {
        Campaign campaign2;
        uint256 targetAmount = 10 ether;

        vm.startPrank(community2owner1);
        campaign2 = community2.addCampaign{value:0.0005 ether}("Mega campanha 2024 para teste isolado", targetAmount);

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
        uint256 initialCondition = campaign.raisedAmount();
        uint256 feeStorage = 100000;
        uint256 expectedRaisedAmount = donationAmount - tax +  initialCondition - feeStorage;

        vm.startPrank(donor1);
        // vm.expectEmit(campaign, "DonationReceived", donor, donationAmount);

        campaign.donate{value: donationAmount}();

        // payable(campaignAddress).transfer(donationAmount);

        vm.stopPrank();

        // Campaign.CampaignData memory campaignData = campaign.campaigns(campaignAddress);
        assertEq(campaign.raisedAmount(), expectedRaisedAmount);
    }

    function testDirectDonate_Fail() public {
        uint256 donationAmount = 0.1 ether;
        // error CampaignPaymmentMustUseDonateFunction;
        // uint256 tax = donationAmount * 1 / 1000;
        // uint256 expectedRaisedAmount = donationAmount - tax;

        vm.startPrank(donor1);
        // vm.expectEmit(campaign, "DonationReceived", donor, donationAmount);
        // campaign.donate(donationAmount);

        vm.expectRevert(0xeb178cbf);
        payable(address(campaign)).transfer(donationAmount);

        vm.stopPrank();

        // Campaign.CampaignData memory campaignData = campaign.campaigns(campaignAddress);
        // assertEq(campaign.raisedAmount(), expectedRaisedAmount);
    }

    function testWithdrawFunds_InactiveCampaign() public {
        vm.startPrank(community1owner1);

        vm.expectRevert("Campaign must be inactive to withdraw funds");
        campaign.withdrawFunds();

        vm.stopPrank();
    }

    function testDeacivateCampaign_Success() public {
        vm.startPrank(community1owner1);

        
        assertTrue(campaign.active());
        campaign.closeCampaign();
        
        assertFalse(campaign.active());

        vm.stopPrank();
    }

    function testWithdrawFunds_FailOwner() public {

        vm.expectRevert("Only Campaign Owner can call this function");
        campaign.withdrawFunds();
    }

    function testWithdrawFunds_Success() public {
        vm.startPrank(community1owner1);
        
        campaign.closeCampaign();
        uint256 initialBalance = address(community1owner1).balance;


        console.log(address(campaign).balance);
        console.log(initialBalance);
        console.log(campaign.raisedAmount());

        uint256 raisedAmount = campaign.raisedAmount();

        campaign.withdrawFunds();
        console.log(address(campaign).balance);

        assertEq(address(community1owner1).balance, initialBalance + raisedAmount);

        vm.stopPrank();
    }

    
    function testTransferToCommunityFunds_Success() public {
        vm.startPrank(community1owner1);
        
        campaign.closeCampaign();
        uint256 initialBalance = address(community).balance;

        console.log(address(campaign).balance);
        console.log(address(community).balance);
        uint256 raisedAmount = campaign.raisedAmount();

        campaign.transferToCommunityFunds();
        console.log(address(campaign).balance);

        assertEq(address(community).balance, initialBalance + raisedAmount);

        vm.stopPrank();
    }

    // Add more tests for transferToCommunityFunds and setIsActive...
}
