source .env

forge script scripts/deploy.mainnet.s.sol:Polygon \
    --private-key $POLYGON_PRIVATE_KEY \
    --rpc-url $POLYGON_RPC_URL \
    --broadcast
