// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import "../src/Community.sol";

contract CommunityTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    // function testCreateCampaign(string memory name, string memory description) public {
    //     uint256 initialCampaignCount = community.totalCampaigns();

    //     vm.expectEmit(community, "CampaignCreated", address(this), name, description);

    //     community.createCampaign(name, description);

    //     assertEq(community.totalCampaigns(), initialCampaignCount + 1);
    // }

    // Add more tests for other Community contract functions...
}
