source .env

forge script scripts/deploy.testnet.s.sol:Mumbai \
    --private-key $MUMBAI_PRIVATE_KEY \
    --rpc-url $MUMBAI_RPC_URL \
    --broadcast
