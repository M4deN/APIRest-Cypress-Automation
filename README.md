# APIREST Cypress Automation

Este repositório contém uma aplicação de exemplo desenvolvida com Node.js, Express e Cypress para realizar testes automatizados em uma API REST. A aplicação utiliza o banco de dados MongoDB para persistência dos dados.

## Como executar a aplicação

Siga as etapas abaixo para executar a aplicação:

1. Certifique-se de ter o Node.js e o MongoDB instalados em sua máquina.

2. Faça o clone deste repositório em sua máquina local.

3. No terminal, navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

5. Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis de ambiente:

```plaintext
API_BASE_URL=http://localhost:3000
```

6. Inicie o servidor com o seguinte comando:

```shell
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Como executar os testes automatizados

Siga as etapas abaixo para executar os testes automatizados com Cypress:

1. Certifique-se de que a aplicação esteja sendo executada localmente.

2. No terminal, navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para abrir a interface do Cypress:

```shell
npm run cy:open
```

4. Na janela do Cypress, clique no arquivo `api_rest_cypress.spec.js` para executar os testes automatizados.

Os testes serão executados e você poderá ver os resultados na interface do Cypress.

## Estrutura do projeto

- O arquivo `index.js` contém o código da aplicação, incluindo as rotas e a lógica de manipulação dos dados.
- O arquivo `api_rest_cypress.spec.js` contém os testes automatizados escritos com o framework Cypress.
- O arquivo `.env` (a ser criado) armazena as variáveis de ambiente necessárias para a execução da aplicação.
- O arquivo `package.json` contém as dependências e os scripts para executar a aplicação e os testes automatizados.

## Requisitos

As seguintes tecnologias e dependências são necessárias para executar a aplicação:

- Node.js
- Express
- Cypress
- Joi
- Nodemon

Certifique-se de ter essas tecnologias instaladas em sua máquina antes de executar a aplicação.

## Licença

Este projeto está licenciado sob a licença ISC.