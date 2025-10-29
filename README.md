# Fullstack Web3 Template



## Passo a Passo para Configurar a Aplicação:

1. No diretório raiz, coloque o diretório com seus arquivos de frontend, chamado "<seu frontend>".

2. No arquivo docker-compose.yml, faça as seguintes alterações:
   - Na linha 3 (frontend), substitua "./<seu frontend>" pelo caminho do seu diretório frontend.
   - Troque o provider local do Anvil para "localhost:8545".

3. No diretório "smartcontracts", coloque seus contratos no diretório "src" e os scripts de testes em "test".

4. Altere o script "deploy.local.sol" com o código de deploy dos seus smart contracts.

5. Execute o comando "docker-compose up".

6. Para verificar, consulte o endereço   localhost:3000

---

# 💡 Este repositório é parte dos cursos, workshops ou bootcamps da NearX School.

Quer acompanhar a aula completa em vídeo e entrar na comunidade? 
👉 https://nearx.com.br/register | Comunidade: https://discord.com/invite/wavXA98gd8

_NearX School: Aprenda o futuro, hoje._
