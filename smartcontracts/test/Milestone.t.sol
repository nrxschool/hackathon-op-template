// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {BaseSetup} from "./BaseSetup.t.sol";

contract MilestoneTest is BaseSetup {
    function setUp() public override {
        BaseSetup.setUp();
        // milestone.setNumber(0);
    }

    // function test_Increment() public {
    //     milestone.increment();
    //     assertEq(milestone.number(), 1);
    // }

    // function testFuzz_SetNumber(uint256 x) public {
    //     milestone.setNumber(x);
    //     assertEq(milestone.number(), x);
    // }
}
