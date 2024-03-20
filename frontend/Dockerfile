# Use a imagem Node.js como base
FROM node:alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package.json package-lock.json* ./

# Instale as dependências do projeto
RUN npm install

# Copie todos os arquivos do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Construa a aplicação Next.js
RUN npm run build

# Exponha a porta 3000 para permitir conexões externas
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]
