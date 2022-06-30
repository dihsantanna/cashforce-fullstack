# Projeto *Cashforce Back-End*

<br>

API construida para ser consumida pelo front-end [*Cashforce Front-End*](https://github.com/dihsantanna/cashforce-front-end), que consiste em um consultor de notas fiscais;

<br>

## Tecnologias utilizadas :computer:

<br>

- _**`Node + ExpressJs + Typescript`**_ para implementação da api, pensando na organização de modo a implementar a arquitetura _**`MSC`**_, também escolhi o *`TypeScript`* pois é bem útil na implementação de **`POO`**;
  
- _**`ORM Sequelize`**_ para implementar de forma mais prática os Models, Queries e Associações, trazendo mais facilidade e versatilidade na hora de fazer as requisições para o banco de Dados;
  
- _**`Decorators/Express`**_ para facilitar a implementação das rotas e também na manipulação dos elementos da requisição como `body, query e params`;

- _**`Docker`**_ para trazer mais comodidade e facilidade na hora de rodar a aplicação.

<br>

___

<br>

## Iniciando o Back-end :rocket:

<br>

_Para seguir esse tutorial é necessário ter o Docker instalado, para mais orientações sobre essa ferramenta acesse [aqui](https://docs.docker.com/get-started/)._

<br>

* Primeiro faça o clone do repositório e entre na pasta *cashforce-back-end*.
 
  Abra seu terminal e rode o seguinte comando:
  ```sh
  git clone git@github.com:dihsantanna/cashforce-back-end.git && cd cashforce-back-end
  ```

  * Dentro da pasta *cashforce-back-end* execute o comando.
  ```sh
  npm run init:app
  ```
  Após todos os comandos terminarem de executar, sua aplicação estará funcionando em um container Docker na porta `3001`.

<br>

___

<br>

## Encerrando Back-end :no_entry_sign:

<br>

* Basta executar o comando abaixo na raiz do projeto para derrubar o container e apagar as imagens:

```sh
npm run kill:app
```

<br>

___

<br>

## Retorno da API :newspaper:

<br>

* Ao fazer uma requisição do tipo GET para o endpoint `/invoices?userId=<id>`, onde `<id>` é o id do usuário que está fazendo a requisição.

  - Para testa use a url `http://localhost:3001/invoices?userId=1` ou clique [aqui](http://localhost:3001/invoices?userId=1). :grin:

* O retorno da requisição deverá ser:

<br>

  ```json
  [
    {
      "id": 1,
      "nNf": "18153",
      "emissionDate": "2020-10-30T11:00:00-03:00",
      "value": "198450",
      "orderStatusBuyer": "0",
      "buyer": {
        "name": "SACADO 001"
      },
      "provider": {
        "name": "CEDENTE 002",
        "tradingName": "CEDENTE 002 LTDA",
        "cnpj": {
          "number": "00000000000002"
        }
      }
    },
    {
      "id": 2,
      "nNf": "18157",
      "emissionDate": "2020-11-04T15:32:35-02:00",
      "value": "168850",
      "orderStatusBuyer": "0",
      "buyer": {
        "name": "SACADO 001"
      },
      "provider": {
        "name": "CEDENTE 002",
        "tradingName": "CEDENTE 002 LTDA",
        "cnpj": {
          "number": "00000000000002"
        }
      }
    },
    {
      "id": 3,
      "nNf": "18184",
      "emissionDate": "2020-11-10",
      "value": "222795",
      "orderStatusBuyer": "7",
      "buyer": {
        "name": "SACADO 001"
      },
      "provider": {
        "name": "CEDENTE 002",
        "tradingName": "CEDENTE 002 LTDA",
        "cnpj": {
          "number": "00000000000002"
        }
      }
    }
  ]
  ```
