# docker-container-connection
Aplicação Nodejs rodando em container do Docker e conexão com banco de dados postgres rodando em um outro container do Docker.

## Comandos

### Criação da rede de conexão dos containers
```
docker network create rededb
```

### Criação do container do banco de dados postgres
```
docker run --name meu-banco -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 --network rededb postgres
```

### Banco de dados postgres e Tabela
```
CREATE DATABASE meubanco
```

```
CREATE TABLE cadastro (
	id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
	email text NOT NULL UNIQUE,
	name varchar(40) NOT NULL,
	created_at timestamptz NOT NULL CONSTRAINT user_created_gen DEFAULT now(),
	updated_at timestamptz,
	deleted_at timestamptz
);
```

### Variáveis de ambiente
```
DBUSER=postgres
DBPASSWORD=postgres
DBHOST=meu-banco
DBPORT=5432
DB=meubanco
```

### Configuração do Dockerfile
```
FROM node:latest
WORKDIR /docker-connection
COPY . .
EXPOSE 3000/tcp
RUN npm install
ENTRYPOINT npm start
```

### Criação da imagem do container da aplicação postgres
```
docker build -t app . 
```