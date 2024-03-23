# Usa a imagem do Node.js
FROM node:latest

# Cria e define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia os arquivos do projeto para o diretório de trabalho no contêiner
COPY . .

# Instala as dependências do projeto
RUN npm install

# Compila o projeto Next.js para produção
RUN npm run build

# Expõe a porta 3000 para o host
EXPOSE 3000

# Comando para executar o servidor Next.js
CMD ["npm", "start"]