# Compila
forge b --skip test script --build-info

# Roda o script para fazer o deploy do contrato na blockchain local do anvil
forge script script/deploy.local.s.sol:Local \
    --rpc-url http://127.0.0.1:8545 \
    --build-info \
    --broadcast \
    --verbosity