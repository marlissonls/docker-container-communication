FROM node:latest

WORKDIR /docker-container-connection

COPY . .

EXPOSE 3000/tcp

RUN npm install

ENTRYPOINT npm start