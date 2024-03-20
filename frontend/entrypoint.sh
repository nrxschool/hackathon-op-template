#!/bin/sh

echo "Verificando se o arquivo deployedContracts.ts já foi criado."
while [ ! -f ./generated/deployedContracts.ts ]; do
  echo "Aguardando..."
  sleep 1
done
echo "Arquivo existente. Iniciando servidor"

pnpm run build

# Inicie o servidor Next.js
pnpm start