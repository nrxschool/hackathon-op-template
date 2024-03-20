if [ ! -f ./generated/deployedContracts.ts ]; then
    forge b --skip test script --build-info

    forge script script/deploy.local.s.sol:Local \
        -f http://anvil:8545 \
        --build-info \
        --broadcast \
        --verbosity

    python3 deploy.py
fi
