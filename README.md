# docker-container-connection
Comunicação entre containers Docker de uma aplicação containerizada Nodejs com banco de dados postgres containerizado.

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
docker container exec -it <hash id do container postgres> bash
```

```
psql -U postgres
```

```
CREATE DATABASE meubanco
```

```
\c meubanco
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
WORKDIR /docker-container-connection
COPY . .
EXPOSE 3000/tcp
RUN npm install
ENTRYPOINT npm start
```

### Criação da imagem do container da aplicação postgres
```
docker build -t docker-container-connection:1.0 . 
```

### Criação do container da aplicação
```
docker container run --name app-docker-container-connection -p 8000:3000 --network rededb docker-container-connection:1.0
```