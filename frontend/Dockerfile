# Imagem com o node_modules instalado
FROM olivmath/hackathon

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN echo "Instalando dependências..." && npm install && echo "Dependências instaladas com sucesso."

# Construa a aplicação Next.js
# RUN npm run build

# Exponha a porta 3000 para permitir conexões externas
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "dev"]
