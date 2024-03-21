// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

pragma solidity ^0.8.15;

import "./BaseFacet.sol";
import "./Campaign.sol";
import "./Community.sol";


contract Donor is BaseFacet {
    struct Donation {
        address donor;
        uint256 amount;
        uint256 year; // Year of donation
    }

    mapping(address => Donation[]) public donations;

    /**
     * @dev Allows a donor to donate to a specific campaign.
     * @param _amount Donation amount.
     */
    function donateToCampaign(address _campaingAddress, uint256 _amount) external payable {
        // Campaign(diamond).donate(_amount);
        Campaign(payable(_campaingAddress)).donate(_amount);
        donations[msg.sender].push(Donation(msg.sender, _amount, block.timestamp)); 
    }

    /**
     * @dev Allows a donor to donate directly to the community.
     * @param _amount Donation amount.
     */
    function donateToCommunity(address _communityAddress, uint256 _amount) external payable {
        payable(_communityAddress).transfer(_amount);
        // Community(payable(_communityAddress)).donate(_amount);
        donations[msg.sender].push(Donation(msg.sender, _amount, block.timestamp)); // Year can be calculated from timestamp
    }

    /**
     * @dev Allows a donor to retrieve their donation history.
     * @param _donor Address of the donor.
     * @return Array of Donation structs representing the donor's history.
     */
    function getDonations(address _donor) external view returns (Donation[] memory) {
        return donations[_donor];
    }

    /**
     * @dev It should return an array of function selectors
     * for all the public functions exposed by the facet.
     *
     * The Diamond contract uses this function to identify which facet to
     * delegate function calls to based on the function selector (first four bytes
     * of the function signature).
     *
     * @return bytes4[] memory An array containing the function selectors of the facet.
     */
    function functionSelectors() public pure override returns (bytes4[] memory) {
        bytes4[] memory selectors = new bytes4[](4); // Adjust the number based on your functions

        // Function selector for donate(uint256)
        selectors[0] = Donor.donateToCampaign.selector;

        // Function selector for getDonationHistory(address donor) (optional)
        //selectors[1] = Donor.getDonationHistory.selector;

        // ... Add selectors for other public functions in DonorFacet

        return selectors;
    }
}
