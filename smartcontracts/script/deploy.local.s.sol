// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {CompetitionResults} from "../src/Competition.sol";

contract Local is Script {
    CompetitionResults competition;

    function setUp() public {}

    function run() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);
    
        competition = new CompetitionResults();
        console.log("Contract address: ", address(competition));
        
        vm.stopBroadcast();
    }
}
