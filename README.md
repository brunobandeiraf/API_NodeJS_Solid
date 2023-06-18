# API NodeJS Solid
GymPass Style App.

## RFs (Requisitos funcionais)
- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logado;
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [x] Deve ser possível o usuário obter o seu histórico de check-ins;
- [x] Deve ser possível o usuário buscar academias próximas (até 10km);
- [x] Deve ser possível o usuário buscar academias pelo nome;
- [x] Deve ser possível o usuário realizar check-in em uma academia;
- [x] Deve ser possível validar o check-in de um usuário;
- [x] Deve ser possível cadastrar uma academia;

## RNs (Regras de negócio)
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [x] O usuário não pode fazer 2 check-ins no mesmo dia;
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [x] O check-in só pode ser validado até 20 minutos após ser criado;
- [x] O check-in só pode ser validado por administradores;
- [x] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não-funcionais)
- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL;
- [x] Todas listas de dados precisam estar paginadas com 20 itens por página;
- [x] O usuário deve ser identificado por um JWT (JSON Web Token);

# Comandos utilizados
### Executar o projeto em ts
npm run start:dev

### Criar o build da aplicação em js
npm run build

### Inicializar diretamente na produção
npm run start 
________
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

# Visualizar o Prisma Studio
npx prisma studio

## Inicializar o Docker via Compose 
Após configurado no arquivo docker-compose.yml
docker compose up -d

## Biblioteca para hash de senha 
npm i bcryptjs 
npm i -D @types/bcryptjs

## Trabalhando com Testes - Vitest 
Plugin vite para compreender as importações com @
npm i vitest vite-tsconfig-paths -D

# Visualizar uma Interface para os Testes realizados
npm i -D @vitest/ui

# Biblioteca para trabalhar com datas
npm i dayjs

# Fastify JWT - Para autenticação - token
npm i @fastify/jwt

# Dentro de prima/vitest-environment-prima
npm link

# Após comando acima, volta na principal e instala link
npm link vitest-environment-prisma

# Executar scripts adaptando ao SO
npm install -D npm-run-all

# Super Test - Requisições HTTP sem precisar colocar app no ar
npm i supertest -D

# Biblioteca JS, mas para adaptar ao TS o supertest
npm i @types/supertest -D

# Trabalhar com Cookies na Aplicação
npm i @fastify/cookie