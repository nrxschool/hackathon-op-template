# Carrega as variáveis de ambiente do arquivo .env
source .env

# Roda o script para fazer o deploy do contrato na rede Testnet da Optmism
forge script script/deploy.testnet.s.sol:Testnet \
    --private-key $PRIVATE_KEY \
    --rpc-url $URL_PROVIDER \
    --broadcast