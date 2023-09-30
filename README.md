# APIREST Cypress Automation

Projeto desenvolvido para a apresentação do seminário sobre frameworks web back-end da disciplina de programação web 2
Este repositório contém uma aplicação de API REST desenvolvida com Node.js, Express e Cypress para realizar testes automatizados. 
## Como executar a aplicação

Siga as etapas abaixo para executar a aplicação:

1. Certifique-se de ter o Node.js instalado em sua máquina.

2. Faça o clone deste repositório em sua máquina local.

3. No terminal, navegue até o diretório raiz do projeto.

4. Execute o seguinte comando para instalar as dependências:

```shell
npm install
```

5. Inicie o servidor com o seguinte comando:

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

4. Na janela do Cypress, clique no arquivo `api.cy.js` para executar os testes automatizados.

Os testes serão executados e você poderá ver os resultados na interface do Cypress.

## Estrutura do projeto

- O arquivo `index.js` contém o código da aplicação, incluindo as rotas e a lógica de manipulação dos dados.
- O arquivo `api.cy.js` contém os testes automatizados escritos com o framework Cypress.
- O arquivo `package.json` contém as dependências e os scripts para executar a aplicação e os testes automatizados.

## Requisitos

As seguintes tecnologias e dependências são necessárias para executar a aplicação:

- Node.js
- Express
- Cypress
- Joi
- Nodemon

Certifique-se de ter essas tecnologias instaladas em sua máquina antes de executar a aplicação.

## Testes Rodando

https://github.com/M4deN/APIRest-Cypress-Automation/assets/43422425/04a36ee5-6ac2-43c0-925c-7a21837e2beb


## CI (Integração Contínua)

O projeto utiliza GitHub Actions para execução de testes automatizados em ambientes de integração contínua. A configuração do fluxo de trabalho pode ser encontrada no arquivo `.github/workflows`:

### Arquivo: .github/workflows/main.yml

```yaml
name: API-RESTFUL Tests 🧪
```

## Licença

Este projeto está licenciado sob a licença MIT.
