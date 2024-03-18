"""
Automation for update debug section in front-end
"""

import os
from dataclasses import dataclass, field
from json import dumps, load
from typing import List
from shutil import copytree

@dataclass
class Contract:
    """
    # Contract must have:
    - contractAddress: str
    - contractName: str
    - abi: list
    """

    name: str
    address: str
    abi: list = field(default_factory=list)


CHAIN_ID = 31337
CONTRACT_SCRIPT_NAME = "deploy.local.s.sol"
TRANSACTIONS_PATH = f"./smartcontracts/broadcast/{CONTRACT_SCRIPT_NAME}/{CHAIN_ID}/run-latest.json"
GENERATED_PATH = "./frontend/generated"
ARTIFACT_PATH = "./smartcontracts/artifacts"


def abi_path(name) -> str:
    return f"{ARTIFACT_PATH}/{name}.sol/{name}.json"


with open(TRANSACTIONS_PATH) as deployed_contracts:
    json_file = load(deployed_contracts)
    transactions = json_file["transactions"]
    contracts: List[Contract] = []

    for contract in transactions:
        if contract["transactionType"] == "CREATE":
            name, address = contract["contractName"], contract["contractAddress"]
            with open(abi_path(name)) as full_abi_json:
                abi = load(full_abi_json)["abi"]
                contracts.append(Contract(name, address, abi))


json_config = {
    CHAIN_ID: [{"name": "localhost", "chainId": str(CHAIN_ID), "contracts": {}}]
}


for contract in contracts:
    json_config[CHAIN_ID][0]["contracts"][contract.name] = {
        "address": contract.address,
        "abi": contract.abi,
    }


typescript_content = f"const deployedContracts = {dumps(json_config)} as const; \n\n export default deployedContracts"


if (os.path.exists(f"{GENERATED_PATH}/deployedContracts.ts")):
    os.remove(f"{GENERATED_PATH}/deployedContracts.ts")
if (os.path.exists(f"{GENERATED_PATH}/build-info")):
    for item in os.listdir(f"{GENERATED_PATH}/build-info"):
        item_path = os.path.join(f"{GENERATED_PATH}/build-info", item)
        if os.path.isfile(item_path):
            os.remove(item_path)
    os.rmdir(f"{GENERATED_PATH}/build-info")

with open(f"{GENERATED_PATH}/deployedContracts.ts", "w") as ts_file:
    ts_file.write(typescript_content)


copytree(f"{ARTIFACT_PATH}/build-info", f"{GENERATED_PATH}/build-info")

