. ./.env

forge b --skip test script --build-info

forge script scripts/deploy.local.s.sol:Local \
    --rpc-url http://anvil:8545 \
    --build-info \
    --broadcast \
    --verbosity
