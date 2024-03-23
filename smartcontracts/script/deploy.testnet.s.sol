// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script, console2} from "forge-std/Script.sol";
import {Milestone} from "../src/Milestone.sol";

contract Mumbai is Script {
    Milestone milestone;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        uint256 jan24 = 1704070163;
        uint256 dec24 = 1735087763;
        milestone = new Milestone(100e18, jan24, dec24);

        vm.stopBroadcast();
    }
}