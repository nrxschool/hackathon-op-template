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
        uint256 timestamp; // Year of donation
    } 

    mapping(address => Donation[]) public donations;

    /**
     * @dev Allows a donor to donate to a specific campaign.
     * @param _campaingAddress Donation to Campaign.
     */
    function donateToCampaign(address _campaingAddress) external payable {
        // Campaign(diamond).donate(_amount);
        uint256 _amount = msg.value;
        Campaign(payable(_campaingAddress)).donate{value:_amount}();
        donations[msg.sender].push(Donation(msg.sender, _amount, block.timestamp));
    }

    /**
     * @dev Allows a donor to donate directly to the community.
     * @param _communityAddress Donation to community.
     */
    function donateToCommunity(address _communityAddress) external payable {
        uint256 _amount = msg.value;
        Community(payable(_communityAddress)).donate{value:_amount}();
        // Community(payable(_communityAddress)).donate(_amount);
        donations[msg.sender].push(Donation(msg.sender, _amount, block.timestamp)); // Year can be calculated from timestamp
    }

    /**
     * @dev Allows a donor to retrieve their donation history.
     * @param _donor Address of the donor.
     * @return Array of Donation structs representing the donor's history.
     */
    function getDonations(address _donor) external view returns (address[] memory,   uint256[] memory, uint256[] memory) {

        Donation[] memory donationArray = donations[_donor];

        address[] memory donor = new address[](0);
        uint256[] memory amount = new uint256[](0);
        uint256[] memory timestamp = new uint256[](0);

        uint256 size = donationArray.length;

        for (uint i = 0; i < size; i++) {
            donor[i] = donationArray[i].donor;
            amount[i] = donationArray[i].amount;
            timestamp[i] = donationArray[i].timestamp; 
        }

        return (donor, amount, timestamp);
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
