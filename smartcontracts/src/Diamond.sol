// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

pragma solidity ^0.8.15;

import "./BaseFacet.sol";
import "./Community.sol";
import "./CommunityManager.sol";
import "./Donor.sol";
import "./Campaign.sol";

contract Diamond {
    // Mapping of facet selectors to facet contracts
    mapping(bytes4 => address) public facets;

    /**
     * @dev Constructor that takes an array of deployed facet addresses and initializes the Diamond.
     * @param _facets Array of addresses for deployed facets.
     */
    constructor(address[] memory _facets) {
        for (uint256 i = 0; i < _facets.length; i++) {
            BaseFacet facet = BaseFacet(_facets[i]);
            bytes4[] memory functionSelectors = facet.functionSelectors();
            for (uint256 j = 0; j < functionSelectors.length; j++) {
                facets[functionSelectors[j]] = _facets[i];
            }

            facet.setDiamond(address(this));
            // facet.diamond = address(this);
        }
    }

    // Receive Ether function
    receive() external payable {}

    /**
     * @dev This function acts as the fallback function for the Diamond contract.
     * It's typically called when a function call doesn't match any of the other defined functions within the contract.
     * In a Diamond architecture, fallback functions are often used to delegate calls to the appropriate facet based on the function selector.
     *
     * The `payable` keyword allows the function to receive Ether sent along with the fallback call.
     */
    fallback() external payable {
        assembly {
            let selector := calldataload(0)
            let facet := sload(selector)

            // require(facet != address(0), "Invalid addresss");

            if iszero(extcodesize(facet)) { revert(0, 36) } // Function not found
            // Make a low-level call to the facet contract, discarding return value
            // gas: The amount of gas to allocate for the call.
            // addr: The address of the contract to call.
            // value: The amount of Ether to send along with the call (usually 0 for function calls).
            // data: The encoded function call data (including function signature and arguments).
            // dataSize: The size of the data byte array.
            // returnadata: A memory location to store the return data (often set to 0 if not needed).
            // returndatasize: The size of the expected return data (often set to 0 if not needed).
            // copy function selector and any arguments
            calldatacopy(0, 0, calldatasize())
            // let success := call(gas(), facet, 0, 0, calldatasize(), returndatasize(), 0)

            // execute function call using the facet
            let result := delegatecall(gas(), facet, 0, calldatasize(), 0, 0)
            // let data := returndatasize()

            // get any return value
            returndatacopy(0, 0, returndatasize())
            // return any return value or error back to the caller
            switch result
            case 0 { revert(0, returndatasize()) }
            default { return(0, returndatasize()) }
        }
    }
}
