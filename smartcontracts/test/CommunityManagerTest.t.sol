// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

import "../src/Campaign.sol";

contract CommunityManagerTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
    }

    function testDeployCommunityManager() public {
        // No assertions needed, successful deployment is implied by the test running.
    }

    function testSetCommunityManagerOK() public {
        vm.startPrank(manager);

        communityManager.setCommunityManager(payable(alice), true); // Set with owner privileges
        vm.stopPrank();

        assertEq(communityManager.getCommunityManagerWallet(), alice);
    }
    
    function testSetCommunityManagerNOK() public {
        vm.startPrank(hackUser);
        vm.expectRevert("Only Community Manager or Owner can perform this action");
        communityManager.setCommunityManager(hackUser, true); // Try setting from non-owner
        vm.stopPrank();

        assertEq(communityManager.getCommunityManagerWallet(), manager);
    }

    function testAddCommunity() public {
        uint24 initialCommunityCount = communityManager.totalCommunities();
        

        // // vm.expectEmit(communityManager, "CommunityAdded", _community);

        // communityManager.addCommunity(_community);
        community = communityManager.addCommunity(1003, "comunidate3", "A segunda maiou comunidade para teste", community2owner1);

        assertEq(communityManager.totalCommunities(), initialCommunityCount + 1);
        // bool isActive = CommunityManager(diamond).isActive();
        // assertEq(isActive, true);
    }


    function testRestrictNonOwnerSetCommunityManager() public {
        // address randomAddress = address(1); // Arbitrary non-owner/manager address

        // vm.expectRevert("Only Community Manager or Owner can perform this action");
        // manager.setCommunityManager(randomAddress); // Try setting from non-owner/manager
    }


    // Future Add more tests for other Community contract functions...
}
