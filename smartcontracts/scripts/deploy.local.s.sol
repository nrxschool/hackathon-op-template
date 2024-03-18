// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {Script, console2} from "forge-std/Script.sol";
import {GDVNProtocol} from "../src/GDVNProtocol.sol";

contract Local is Script {
    GDVNProtocol GDVN;

    function setUp() public {}

    function run() public {
        vm.startBroadcast(0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80);

        address payable contractOwner = payable(vm.envAddress("PA_OWNER"));

        GDVN = new GDVNProtocol(contractOwner);
        console2.log("GDVNProtocol address: ", address(GDVN));

        vm.stopBroadcast();
    }
}
