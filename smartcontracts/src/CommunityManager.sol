// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
pragma solidity ^0.8.15;

import "./BaseFacet.sol";
import "./Community.sol";

contract CommunityManager is BaseFacet {

    error CommuntyAlredyRegistered();

    mapping(address => bool) public communityManagers;
    address public communityManager;

    
    uint24 private communitiesCount;

    mapping (uint64 => Community) public communities;
    uint64[] public communityList;

    /**
     * @dev Constructor that takes the manager and initializes the CommunityManager.
     * @param _manager Address of manager.
     */
    constructor(address payable _manager) {
        communitiesCount = 0;

        communityManagers[_manager] = true;
        communityManager = _manager;
    }

    /**
     * @dev Allows the Diamond contract (owner) to set a community manager.
     * @param _manager Address of the community manager.
     * @param _isManager Boolean indicating community manager status (True for manager, False otherwise).
     */
    function setCommunityManager(address _manager, bool _isManager) external onlyCommunityManager {
        communityManagers[_manager] = _isManager;
        communityManager = _manager;

    }

    /**
    * @dev This function retrieves the total number of registered communities within the system.
    *
    * This value represents the count of communities that have been created and potentially managed
    * through the Community Manager contract or related functionalities.
    *
    * @return uint24 The total number of registered communities (capped at 2**24 - 1).
    *
    * Note:
    *
    * - The return value is limited to `uint24` (maximum value of 2**24 - 1) to optimize storage usage.
    */
    function totalCommunities() public view returns (uint24) {
        return communitiesCount;
    }

    /**
    * @dev This function retrieves the address of the currently set Community Manager.
    *
    * This address is expected to be payable, meaning it can receive Ether payments.
    * The Community Manager is responsible for various community-related tasks within the ecosystem.
    *
    * @return address payable The address of the community manager wallet.
    *
    */
    function getCommunityManagerWallet() external view returns (address payable) {
        // Implement logic to retrieve the community manager's wallet address
        return payable(communityManager); 
    }

    /**
     * @dev Checks if an address is a community manager.
     * @param _manager Address to check.
     * @return True if the address is a community manager, False otherwise.
     */
    function isCommunityManager(address _manager) public view returns (bool) {
        bool result =  false;
        if (communityManagers[_manager] || msg.sender == diamond) {
                result = true;
        }
        return result;
    }

    function addCommunity(uint64 _id, string memory _name, string memory _description, address _communityOwner) public returns ( Community) {
        Community newCommunity = new Community(_id, _name, _description, _communityOwner);
        if (isCommunityRegistered(_id)){
            // Community is already registered
            revert CommuntyAlredyRegistered();
        } else {
            communityList.push(_id);
            communitiesCount ++;
        }

        return newCommunity;
    }

    function isCommunityRegistered(uint64 _id) public view returns (bool){
        bool result = false;
        uint64[] memory list = communityList;
        for (uint24 i = 0; i < communitiesCount; i++) {
            uint64 item = list[i];
            if (item == _id){
                result = true;
                break;
            }
        }
        return result;
    }

    function getComunities() public view returns (uint64[] memory) {
        uint64[] memory list = communityList;
        return list;
    }



    /**
     * @dev Modifier to restrict function calls to the Community Manager contract.
     */
    modifier onlyCommunityManager() {
        require(isCommunityManager(msg.sender), "Only Community Manager or Owner can perform this action");
        _;
    }

    // ... other community manager related functions

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

        selectors[0] = CommunityManager.setCommunityManager.selector;

        selectors[1] = CommunityManager.getCommunityManagerWallet.selector;

        // ... Add selectors for other public functions in CommunityManagerFacet

        return selectors;
    }
}
