// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Campaign} from "../src/Campaign.sol";
import {CommunityManager} from "../src/CommunityManager.sol";
import {Community} from "../src/Community.sol";
import {Donor} from "../src/Donor.sol";
import {Diamond} from "../src/Diamond.sol";
import {Utils} from "./Utils.t.sol";

contract BaseSetup is Utils {
    Diamond diamond;
    CommunityManager communityManager;
    Community community;
    Community community2;
    Campaign campaign;
    Donor donor;

    address[] _users;
    address controller;
    address alice;
    address bob;
    address eve;
    address trent;
    address community1owner1;
    address community2owner1;
    address payable manager;
    address donor1;
    address hackUser;
    address zero;

    function setUp() public virtual {
        _users = createUsers(10);

        controller = _users[0];
        alice = _users[1];
        bob = _users[2];
        eve = _users[3];
        trent = _users[4];
        zero = address(0x0);
        community1owner1 = _users[5];
        community2owner1 = _users[6];
        manager = payable(_users[7]);
        donor1 = _users[8];
        hackUser = _users[9];

        vm.label(controller, "CONTROLLER");
        vm.label(alice, "ALICE");
        vm.label(bob, "BOB");
        vm.label(eve, "EVE");
        vm.label(trent, "TRENT");
        vm.label(zero, "ZERO");
        vm.label(community1owner1, "Baixada Sul educa");
        vm.label(community2owner1, "ZL na educacao");
        vm.label(manager, "TF Boss");
        vm.label(donor1, "Big Heart");
        vm.label(hackUser, "Bunny");

        vm.startPrank(controller);
        donor = new Donor();
        communityManager = new CommunityManager(manager);
        community =
            communityManager.addCommunity(1001, "comunidate1", "A melhor comunidade para teste", community1owner1);
        community2 =
            communityManager.addCommunity(1002, "comunidate2", "A maior comunidade para teste", community2owner1);
        vm.stopPrank();

        vm.startPrank(community1owner1);
        campaign = community.addCampaign("Super campanha 2024 para teste", 5 ether);
        vm.stopPrank();
    }

    function test_basesetup_just_for_pass_in_converage() public {}
}
