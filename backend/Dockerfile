# Base image - Node.js 18 (lightweight alpine version)
FROM node:18-alpine

# Container madhe working directory banva
WORKDIR /app

# Aधी फक्त package.json copy kara (dependency caching sathi)
COPY package*.json ./

# Dependencies install kara
RUN npm install

# Ata baki sagla backend code copy kara
COPY . .

# Backend cha port expose kara
EXPOSE 5000

# Container start zalyavar he command chalel
CMD ["node", "server.js"]