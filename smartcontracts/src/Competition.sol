// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;
import {console} from "forge-std/Test.sol";

contract CompetitionResults {
    address public owner;
    uint256 public competitionsCount;


    // Estrutura para armazenar os dados de resultados de competições
    struct Competition {
        string name;
        uint256 timestamp;
    }

    // Mapeia cada competição em um id
    mapping(string => Competition) private competitions;

    // Evento para notificar a inclusão do resultado de uma competição
    event CompetitionResultAdded(string competitionId, string name, uint256 timestamp);


    // Define o proprietário do contrato
    constructor() {
        owner = msg.sender;
    }


    // Adiciona dados dos resultados de uma nova competição
    function addCompetitionResult(string memory _name, string memory _resultHash) external {
        require(msg.sender == owner, "Authorized to owner only");
        require(competitions[_resultHash].timestamp == 0, "Hash has already been included");

        competitionsCount++;
        competitions[_resultHash] = Competition(_name, block.timestamp);
        emit CompetitionResultAdded(_resultHash, _name, block.timestamp);
    }


    // Obtém os dados dos resultados de uma competição pelo hashId
    function getCompetitionResult(string memory _hashId) public view returns(string memory, string memory, uint256) {
        require(competitions[_hashId].timestamp != 0, "HashId not found");
            
        return (_hashId, competitions[_hashId].name, competitions[_hashId].timestamp);
    }
   
}
