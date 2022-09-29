# Projeto *Cashforce Back-End*

<br>

API construida para ser consumida pelo front-end [*Cashforce Front-End*](https://github.com/dihsantanna/cashforce-front-end), que consiste em um consultor de notas fiscais;


Para saber como utilizar toda a aplicação a [*acesse aqui*](https://github.com/dihsantanna/cashforce-fullstack)


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
