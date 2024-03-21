// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./BaseFacet.sol";
import "./CommunityManager.sol";
import "./Campaign.sol";

contract Community is BaseFacet {
    error CampaignAlredyCreated();
    error CommuntyFundsCannotBeWithdraw();

    struct ExpenseReport {
        // Mapping of expense category (string) to its amount (uint256)
        mapping(string => uint256) expenses;
        // Optional additional data (e.g., receipts, descriptions)
        string[] reportData;
        // Approvals mapping (address of approver to bool indicating approval)
        mapping(address => bool) approvals;
    }

    struct CommunityData {
        string name;
        string description;
        bool allowedCampaign;
        Campaign currentCampaign;
        mapping(address => bool) approvedExpenses; // Mapping of approved expense addresses
        mapping(uint256 => ExpenseReport) expenseReports; // Mapping of year to expense report
    }

    uint64 public id;
    uint256 public raisedAmount;

    mapping(uint64 => CommunityData) public community;

    mapping(address => bool) public communityOwners;
    address public communityOwner;

    /**
     * @dev Constructor that takes the name and description and initializes the Community.
     * @param _name Name of the community.
     * @param _description Description of the community.
     */
    constructor(uint64 _id, string memory _name, string memory _description, address _communityOwner) {
        community[_id].name = _name;
        id = _id;
        community[_id].description = _description;
        community[_id].allowedCampaign = true;

        communityOwners[_communityOwner] = true;
        communityOwner = _communityOwner;
    }

    /**
     * @dev Allows a Community Manager to define which communities can create campaigns.
     * @param _id Array of addresses for allowed campaign creation.
     * @param _permission Array of addresses for allowed campaign creation.
     */
    function defineAllowedCampaigns(uint64 _id, bool _permission) external onlyCommunityManager {
        community[_id].allowedCampaign = _permission;
    }

    /**
     * @dev Checks if a community can create a campaign.
     * @param _id Address of the community.
     * @return True if the community can create a campaign, False otherwise.
     */
    function canCreateCampaign(uint64 _id) external view returns (bool) {
        return community[_id].allowedCampaign;
    }

    /**
     * @dev Allows a Community Manager to set approval for a specific expense address.
     * @param _expense Address of the expense.
     * @param _approved Boolean indicating approval status (True for approved, False otherwise).
     */
    function setExpenseApproval(address _expense, bool _approved) external onlyCommunityManager {
        // communities[msg.sender].approvedExpenses[_expense] = _approved;
    }

    /**
     * @dev Allows the Diamond contract (owner) to add an expense report for a specific year.
     * @param _year Year for the expense report.
     * @param _report Report data.
     */
    function addExpenseReport(uint256 _year, string memory _report) external onlyOwner {
        // ExpenseReport storage report = communities[msg.sender].expenseReports[_year];
        // report.reportData = new string[](1); // Create a new string array
        // report.reportData[0] = _report; // Assign _report to the first element
    }

    /**
     * @dev Allows retrieval of an expense report for a specific year.
     * @param _year Year for the expense report.
     * @return The report data for the given year.
     */
    function getExpenseReport(uint256 _year) external view returns (string[] memory) {
        // ExpenseReport storage report = communities[msg.sender].expenseReports[_year];
        // return report.reportData; // Access report data within the ExpenseReport struct
    }

    function addCampaign(string memory _description, uint256 _targetAmount)
        public
        onlyCommunityOwner
        returns (Campaign)
    {
        Campaign newCampaign = new Campaign(address(this), msg.sender, _description, _targetAmount);

        if (community[id].allowedCampaign) {
            community[id].currentCampaign = newCampaign;
            community[id].allowedCampaign = false;
        } else {
            // Campaign is already registered
            revert CampaignAlredyCreated();
        }

        return newCampaign;
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
    function withdrawFunds() view external onlyCommunityOwner() {
        // require(active == false, "Campaign must be inactive to withdraw funds");
        revert CommuntyFundsCannotBeWithdraw();
    }

    /**
     * @dev Modifier to restrict function calls to Community Managers.
     */
    modifier onlyCommunityManager() {
        CommunityManager facet = CommunityManager(diamond);
        require(facet.isCommunityManager(msg.sender), "Only Community Manager can call this function");
        _;
    }

    /**
     * @dev Modifier to restrict function calls to Community Owner.
     */
    modifier onlyCommunityOwner() {
        require(msg.sender == communityOwner, "Only Community Owner can call this function");
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
        bytes4[] memory selectors = new bytes4[](3); // Adjust the number based on your functions

        // Function selector for getCommunity(address _communityAddress) (view)
        selectors[0] = Community.defineAllowedCampaigns.selector;

        // Function selector for getActiveCampaigns(address _communityAddress) (view) (optional)
        //selectors[1] = Community.getActiveCampaigns.selector;

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
