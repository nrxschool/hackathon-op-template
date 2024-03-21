// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./BaseFacet.sol";
import "./Community.sol";
import "./CommunityManager.sol";

import "forge-std/console.sol";

contract Campaign is BaseFacet {
    error CampaignPaymmentMustUseDonateFunction();
    error MinimunToPayNotAchieved();

    event Log(uint256 gas);

    address public owner;
    address payable public communityManagerAddress;
    address payable public community;
    string public description;
    uint256 public targetAmount;
    uint256 public raisedAmount;
    uint256 public feeAmount;
    uint256 public commisionAmount;
    bool public active;

    /**
     * @dev Constructor that takes the name and description and initializes the Campaign.
     * @param _communityAddress Adrress of the campaign.
     * @param _description Description of the campaign.
     * @param _targetAmount Target of the campaign.
     */
    constructor(address _communityAddress, address _owner, string memory _description, uint256 _targetAmount) payable {
        require(msg.value >= 0.00005 ether,"Minimal Funds to Create Campaign not acchieved");
        feeAmount = msg.value;
        owner = _owner;
        community = payable(_communityAddress);
        description = _description;
        active = true;

        targetAmount = _targetAmount;
        raisedAmount = 0;

        Community communityTemp = Community(payable(_communityAddress));

        communityManagerAddress = communityTemp.communityManagerAddress();
    }

    /**
     * @dev Allows users to donate to a campaign.
     */
    function donate() public payable {
        uint256 _amount = msg.value;
        if (_amount <= 0) {
            revert MinimunToPayNotAchieved();
        }
        uint256 commission = _amount * 1 / 1000;
        // tx.gasprice * tx.gaslimit
        uint256 feeStorage = 100000;
        if (_amount >= 200000)
        {
            _amount = _amount - commission - feeStorage;
            // payable(communityManagerAddress).transfer(commission);

        }
        else {
            if (_amount >= 100101){
                _amount = _amount - commission - feeStorage;
            } 
            else  {
                if (_amount > commission){ 
                    _amount = 0;
                    feeStorage = _amount - commission;
                }
                else {
                    feeStorage = _amount;
                    commission = 0;
                    _amount = 0;

                }
            }
        }
        feeAmount += feeStorage;
        commisionAmount += commission;
        raisedAmount += _amount;
    }

    /**
     * @dev Allows campaign owners to withdraw raised funds after the campaign is inactive.
     */
    function withdrawFunds() external onlyCampaignOwner {
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
    function transferToCommunityFunds() external onlyCampaignOwner {
        require(active == false, "Campaign must be inactive to transfer funds");
        Community(community).donate{value:raisedAmount}();
        raisedAmount = 0;
    }

    /**
     * @dev This function allows a campaign owner to close  the campaign.
     *
     * Requirements:
     *
     * - The caller must be the owner of the campaign contract (enforced by the `onlyCampaignOwner` modifier).
     */
    function closeCampaign() external onlyCampaignOwner {
        require(active == true, "Campaign must be active to allow closure");

        active = false;
    }

    /**
     * @dev This function allows the campaign owner to activate or deactivate a campaign.
     * It sets the `isActive` state of the campaign contract, indicating whether it's currently open for donations.
     *
     * Requirements:
     *
     * - The caller must be the owner of the campaign contract (enforced by `onlyCampaignOwner` modifier).
     */
    function setActive() external onlyCampaignOwner {
        active = true;
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

        selectors[0] = Campaign.withdrawFunds.selector;

        selectors[1] = Campaign.transferToCommunityFunds.selector;

        selectors[2] = Campaign.setActive.selector;

        return selectors;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {
        revert CampaignPaymmentMustUseDonateFunction();

        // raisedAmount += msg.value;
        // donate(msg.value);
    }

    fallback() external payable {
        revert CampaignPaymmentMustUseDonateFunction();
        
    }
}
