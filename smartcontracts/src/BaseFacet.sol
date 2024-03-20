// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

/**
 * @title BaseFacet
 * @dev This contract serves as a base for all diamond facets, providing common functionalities.
 */
abstract contract BaseFacet {
    // Address of the Diamond contract
    address public diamond;

    /**
     * @dev Modifier to restrict function calls to the Diamond contract.
     */
    modifier onlyOwner() {
        require(msg.sender == diamond, "Only Diamond can call this function");
        _;
    }

    /**
     * @dev This function is a virtual function intended to be overridden by
     * inheriting facet contracts. It should return an array of function selectors
     * for all the public functions exposed by the facet.
     *
     * The Diamond contract uses this function to identify which facet to
     * delegate function calls to based on the function selector (first four bytes
     * of the function signature).
     *
     * @return bytes4[] memory An array containing the function selectors of the facet.
     */
    function functionSelectors() public pure virtual returns (bytes4[] memory);

    /**
     * @dev This function allows the contract to be linked to a Diamond instance.
     * It's typically used during deployment or initialization to associate the facet with its corresponding Diamond contract.
     *
     * Requirements:
     *
     * - The caller must be the contract itself (enforced by `onlySelf`).
     *
     * @param _diamond The address of the Diamond contract to link with.
     */
    function setDiamond(address _diamond) external {
        require(diamond == address(0), "Diamond address can only be set once");
        diamond = _diamond;
    }
}
