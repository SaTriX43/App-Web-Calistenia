# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json al contenedor
COPY package*.json ./ 

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Expón el puerto en el que se ejecutará la aplicación
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
