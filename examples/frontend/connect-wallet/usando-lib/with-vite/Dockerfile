# Imagem com o node_modules instalado
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install

# Exponha a porta 3000 para permitir conexões externas
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "dev"]
