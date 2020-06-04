# ecoleta
Estudos NLW
Criar o Fluxo
https://whimsical.com/


Usando yarn:
- yarn
- yarn init
- mkdir server
- code .
- yarn add express
- yarn add @types/express
- yarn add ts-node -D
- yarn tsc --init
- yarn add typescript -D
- yarn add ts-node-dev -D
- yarn ts-node-dev src/server.ts
- yarn create react-app web --template=typescript

- cd web
- yarn start
- yarn build

dentro do /server
banco de dados
- yarn add knex
- yarn add sqlite3
- yarn knex migrate:latest --knexfile knexfile.ts migrate:latest (se ele criar um arquivo database.sqlite é porque funcionou)

,
    useNullAsDefault: true, remove o erro após o yarn knex migrate ser executado