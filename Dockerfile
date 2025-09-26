#Specifica l'immagine bases
FROM node:18
#Crea una directory di lavoro
WORKDIR /app
#Copia i file package.json e package-lock.json nella directory di lavoro
COPY package*.json ./
#Installa le dipendenze del progetto
RUN npm install
#Copia il resto dei file del progetto nella directory di lavoro
COPY . .
#Espone la porta su cui l'applicazione ascolta
EXPOSE 3000
#Comando per avviare l'applicazione
CMD ["node", "index.js"]    