// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CompetitionResults} from "../src/Competition.sol";

contract Testnet is Script {
    CompetitionResults competition;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        competition = new CompetitionResults();
        console.log("Contract address: ", address(competition));
        
        vm.stopBroadcast();
    }
}
