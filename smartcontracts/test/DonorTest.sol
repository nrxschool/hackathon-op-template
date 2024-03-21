// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import "../src/Donor.sol";

contract DonorTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function testDonateToCampaign_Success() public {
        // uint256 donationAmount = 1 ether;

        
        // vm.startPrank(donor1);
        // donation.donateToCampaign{value: donationAmount}(address(campaign));

        // vm.stopPrank();

        // address[] memory _donor ;
        // uint256[] memory _amount ;
        // uint256[] memory _timestamp;

        // (_donor, _amount, _timestamp) = donation.getDonations(address(donor1));

        // // Assert donation details
        // assertEq(_donor.length, 1);
        // assertEq(_donor[0], address(this));
        // assertEq(_amount[0], donationAmount);
    }

    function testDonateToCommunity_Success() public {

        // donor.donateToCommunity{value: donationAmount}(communityAddress);

        // Donation[] storage donorDonations = donor.donations(address(this));

        // // Assert donation details (similar to testDonateToCampaign)
        // assertEq(donorDonations.length, 1);
        // assertEq(donorDonations[0].donor, address(this));
        // assertEq(donorDonations[0].amount, donationAmount);
        // // Year can be approximately verified using block.timestamp from deployment time
    }

    function testDonateToCampaign_NoFunds() public {
        // address campaignAddress = address(this);

        // // No vm.deal() to simulate insufficient funds

        // vm.expectRevert("Insufficient gas sent for transaction");
        // donation.donateToCampaign{value: 0}(campaignAddress);
    }
}
