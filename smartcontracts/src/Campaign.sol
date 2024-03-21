// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./BaseFacet.sol";
import "./Community.sol";
import "./CommunityManager.sol";

contract Campaign is BaseFacet {
    address public owner;
    address payable public community;
    string public description;
    uint256 public targetAmount;
    uint256 public raisedAmount;
    bool public active;

    /**
     * @dev Constructor that takes the name and description and initializes the campaign.
     * @param _communityAddress Adrress of the campaign.
     * @param _description Description of the campaign.
     * @param _targetAmount Target of the campaign.
     */
    constructor(address _communityAddress, address _owner, string memory _description, uint256 _targetAmount) {
        owner = _owner;
        community = payable(_communityAddress);
        description = _description;
        active = true;

        targetAmount = _targetAmount;
        raisedAmount = 0;
    }

    /**
     * @dev Allows users to donate to a campaign.
     * @param _amount Donation amount.
     */
    function donate(uint256 _amount) external payable {
        uint256 commission = _amount * 1 / 1000; // 0.1% community manager commission
        address payable communityManager = payable(CommunityManager(diamond).getCommunityManagerWallet());
        communityManager.transfer(commission);

        _amount = _amount - commission;

        raisedAmount += _amount;
    }

    /**
     * @dev Allows campaign owners to withdraw raised funds after the campaign is inactive.
     */
    function withdrawFunds() external onlyCampaignOwner() {
        require(active == false, "Campaign must be inactive to withdraw funds");
        payable(owner).transfer(raisedAmount);
        raisedAmount = 0;
    }

    /**
     * @dev This function allows a campaign owner to transfer funds from the campaign contract to the community funds address.
     *
     * Requirements:
     *
     * - The caller must be the owner of the campaign contract (enforced by the `onlyCampaignOwner` modifier).
     */
    function transferToCommunityFunds() external onlyCampaignOwner() {
        require(active == false, "Campaign must be inactive to transfer funds");
        payable(community).transfer(raisedAmount);
        raisedAmount = 0;
    }

    /**
     * @dev This function allows the campaign owner to activate or deactivate a campaign.
     * It sets the `isActive` state of the campaign contract, indicating whether it's currently open for donations.
     *
     * Requirements:
     *
     * - The caller must be the owner of the campaign contract (enforced by `onlyCampaignOwner` modifier).
     *
     * @param _isActive A boolean value determining whether to activate (true) or deactivate (false) the campaign.
     */
    function setIsActive(bool _isActive) external onlyCampaignOwner() {
        active = _isActive;
    }

    /**
     * @dev This function likely checks whether an address is the owner of a specific campaign.
     * It's probable that this function is used internally by other functions to control access based on ownership.
     *
     * Parameters:
     *
     * - `_owner` (address): The address to be verified as the campaign owner.
     * - `_campaign` (address): The address of the campaign contract to check ownership for.
     *
     * Returns:
     *
     * - (bool): Potentially returns `true` if `_owner` is the campaign owner for `_campaign`, and `false` otherwise. The actual return behavior depends on the implementation within the campaign contract.
     */
    function isCampaignOwner(address _owner) public view returns (bool) {
        return _owner == owner;
    }

    /**
     * @dev Modifier to restrict function calls to Campaign Owners for a specific campaign.
     */
    modifier onlyCampaignOwner() {
        // Campaign facet = Campaign(diamond);
        require(this.isCampaignOwner(msg.sender), "Only Campaign Owner can call this function");
        _;
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
        bytes4[] memory selectors = new bytes4[](5); // Adjust the number based on your functions

        selectors[0] = Campaign.donate.selector;

        selectors[1] = Campaign.withdrawFunds.selector;

        selectors[2] = Campaign.transferToCommunityFunds.selector;

        selectors[3] = Campaign.setIsActive.selector;

        return selectors;
    }


    receive() external payable {
        uint256 _amount = msg.value;
        uint256 commission = _amount * 1 / 1000; // 0.1% community manager commission
        address payable communityManager = payable(CommunityManager(diamond).getCommunityManagerWallet());
        communityManager.transfer(commission);

        _amount = _amount - commission;

        raisedAmount += _amount;
    }

    fallback() external payable {
        // Code to handle unexpected Ether payments
        uint256 _amount = msg.value;
        uint256 commission = _amount * 1 / 1000; // 0.1% community manager commission
        address payable communityManager = payable(CommunityManager(diamond).getCommunityManagerWallet());
        communityManager.transfer(commission);

        _amount = _amount - commission;

        raisedAmount += _amount;
    }
}
