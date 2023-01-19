FROM node:latest

WORKDIR /docker-connection

COPY . .

EXPOSE 3000/tcp

RUN npm install

ENTRYPOINT npm start