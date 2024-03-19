// SPDX-License-Identifier: MIT License
pragma solidity ^0.8.18;

import "../lib/forge-std/src/token/ERC721.sol";
import "../lib/forge-std/src/utils/Counters.sol";

contract FlutterCourse is ERC721{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    
    struct TokenData {
        uint256 expirationDate;
    }

    mapping(uint256 => TokenData) private _tokenData;
    mapping(address => uint256[]) private _userTokens;


    constructor() ERC721("FlutterCourse", "FLUT") {
    }

    function mint(address to, uint256 expirationDate) external returns (uint256) {
        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current();
        _mint(to, newTokenId);
        _tokenData[newTokenId].expirationDate = expirationDate;
        _userTokens[to].push(newTokenId);
        return newTokenId;
    }

    function getExpirationDate(uint256 tokenId) public view returns (uint256) {
        address owner = ownerOf(tokenId);
        require(owner != address(0), "Token does not exist");
        return _tokenData[tokenId].expirationDate;
    }

    function getTokenExpirationDate(address user) public view returns (uint256 expirationDate) {
        uint256[] memory tokens = _userTokens[user];
        require(tokens.length > 0, "O usuario nao possui nenhum token");

        for (uint256 i = 0; i < tokens.length; i++) {
            uint256 tokenId = tokens[i];
            if (ownerOf(tokenId) == user) {
                return _tokenData[tokenId].expirationDate;
            }
        }
        revert("O usuario nao possui nenhum token valido");
    }
//    uint256 public number;

//    function setNumber(uint256 newNumber) public {
//        number = newNumber;
//    }

    //function increment() public {
        //number++;
//    }
}

