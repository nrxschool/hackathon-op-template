// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {CompetitionResults} from "../src/Competition.sol";

contract CompetitionTest is Test {
    CompetitionResults public competition;

    function setUp() public {
        competition = new CompetitionResults();
        competition.addCompetitionResult('Hackathon 01', '1111');
        competition.addCompetitionResult('Hackathon 02', '2222');
    }

    function test_GetCompetitionResult() public view {
        (string memory hashId, string memory name, uint256 timestamp) = competition.getCompetitionResult('1111');
        console.log("HashId: ", hashId);
        console.log("Name: ", name);
        console.log("Timestamp: ", timestamp);
        console.log();

        (hashId, name, timestamp) = competition.getCompetitionResult('2222');
        console.log("HashId: ", hashId);
        console.log("Name: ", name);
        console.log("Timestamp: ", timestamp);
    }

    function test_GetCompetitionsCount() public view {
        console.log("Owner: ", competition.owner());
        console.log("Total Competitions: ", competition.competitionsCount());
    }
}
