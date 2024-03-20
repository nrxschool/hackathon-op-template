// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import "../src/Donor.sol";

contract DonorTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    // function testDonateToCampaign() public {
    //     address donorAddress = address(this);
    //     uint256 donationAmount = 1 ether;

    //     // Approve the donation amount (if applicable based on your Campaign contract)
    //     // campaign.approve(donor, donationAmount); // Uncomment if needed

    //     uint256 initialCampaignBalance = campaign.balance();

    //     vm.expectEmit(donor, "DonationRecorded", donorAddress, donationAmount, block.timestamp); // Expect DonationRecorded event

    //     donor.donateToCampaign(address(campaign), donationAmount);

    //     assertEq(campaign.balance(), initialCampaignBalance + donationAmount);
    // }
}
