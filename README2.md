# Comandos utilizados

## Criar o package.json
npm init -y

## Servidor compreender código ts e tsup para criar o builder da aplicação
npm i typescript @types/node tsx tsup -D

## Criar arquivo tsconfig.json
npx tsc --init 

## Instalar o Fastify
npm i fastify

## Criar variáveis de ambiente
npm i dotenv

## Validar as variáveis de ambiente
npm i zod

## esLint - utilizando um padrão de escrita - Optei pela Rocketseat
npm i @rocketseat/eslint-config -D

## ORM (Object Relational Mapper) PRISMA
Outros exemplos de ORM são Sequelize e TypeORM
Neste projeto utilizei Prisma. 
https://www.prisma.io/

## Instalar o Prisma (-D na dependência de desenvolvimento)
npm i prisma -D

## Inicializar a parte do banco de dados da aplicação
npx prisma init 

## Cria em Typescript uma representação da tabela
npx prisma generate

## Cria um cliente prisma - Dependência de Produção para acessar o banco de dados
npm i @prisma/client

## Criar Docker da aplicação
docker run --name api-solid-pg -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=apisolid -p 5432:5432 bitnami/postgresql

## Verifica na aplicação, o que não refletiu no banco e cria
npx prisma migrate dev

## Visualizar o Prisma Studio
npx prisma studio

## Inicializar o Docker via Compose 
Após configurado no arquivo docker-compose.yml
docker compose up -d

## Biblioteca para hash de senha 
npm i bcryptjs 
npm i -D @types/bcryptjs