// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import {console2} from "forge-std/console2.sol";
import {Test} from "forge-std/Test.sol";
import {Vm} from "forge-std/Vm.sol";

contract Utils is Test {
    string mnemonic =
        "test test test test test test test test test test test junk";

    function createUsers(
        uint32 userNum
    ) public returns (address payable[] memory) {
        address payable[] memory users = new address payable[](userNum);
        for (uint32 i = 0; i < userNum; i++) {
            (address user, ) = deriveRememberKey(mnemonic, i);
            vm.deal(user, 10000 ether);
            users[i] = payable(user);
        }
        return users;
    }

    function uintToString(uint256 value) internal pure returns (string memory) {
        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

    function bytes2uint(bytes32 b) public pure returns (uint256 result) {
        result = uint256(b);
    }

    function test_utils_just_for_pass_in_converage() public {}
}
