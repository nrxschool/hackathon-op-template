// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IErrors {
    error NotTheOwner();
    error IndexOutOfRange(uint index);
    error AlreadyVoted();
    error NotTheVotingChairman();
    error DeadlineNotReached(uint secondsToEnd);
    error VotingIsTied();
}