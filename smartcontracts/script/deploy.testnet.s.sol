// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script, console2} from "forge-std/Script.sol";
import {Milestone} from "../src/Milestone.sol";

contract Mumbai is Script {
    Milestone milestone;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        milestone = new Milestone(100e18);

        vm.stopBroadcast();
    }
}