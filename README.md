
# Projeto *Cashforce Front-End*

Foi desenvolvido uma página seguindo um modelo do [figma](https://www.figma.com/file/m82rvaRyNaYV5VC4QcvaoZ/Teste-Cashfroce), cujo objetivo é possibilitar a consulta das informações de notas fiscais emitidas e o status da transação que foi realizada.

O projeto é alimentado com informações da API do projeto Cashforce-Back-End [clique aqui](https://github.com/dihsantanna/cashforce-back-end) para visualizar a documentação e código da API.






## Stacks utilizada :computer:

* **VueJS + VueX** para manipulação e estruturação da pagina, e também a manipulação de estados;
* **TypeScript** como linguagem base da aplicação, para poder ter uma maior tipagem;
* **Bootstrap** para uma estilização mais produtiva, porém foram feitos alguns ajustes com **CSS** padrão;
* **Axios** para realizar as requisições de forma mais simples e intuitiva;
* **Docker** para trazer mais comodidade e facilidade na hora de rodar a aplicação.


## Instalação :rocket:

Instale o projeto com Docker Compose

* Faça o clone do projeto com o comando:
```bash
git clone git@github.com:dihsantanna/cashforce-front-end.git && cd cashforce-front-end
```

* Execute o comando:
```bash
npm run compose:up
```

* Após o termino da execução do docker acesse o link [http://localhost:8080](http://localhost:8080)
para abrir a pagina em seu navegador.

**IMPORTANTE:** Para que a aplicação funcione corretamente
é necessário que a api esteja sendo executada, por isso siga o 
siga a documentação da api que se encontra [aqui](https://github.com/dihsantanna/cashforce-back-end#iniciando-o-back-end-rocket).  
## Encerrando Aplicação :no_entry_sign:

* Caso queira somente encerrar execute o comando:
```bash
npm run compose:down
```

* Caso queira encerrar e eliminar as imagens do docker
```bash
npm run kill:app
```
## Demonstração

### Página
![demonstração da pagina](demononstracao.gif)


## Aprendizados

Foi incrível esse meu primeiro contato com **VueJS + Vuex**, pode não ter sido uma aplicação robusta e cheia de detalhes, porém foi um excelente aprendizado.
Achei uma tecnologia simples e muito performática, além de contar com uma documentação super completa que me ajudou muito nas horas de aperto. :smile:
