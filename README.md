# cities-states-brazil-json

![Imagem do projeto](https://github.com/DuhBorba/cities-states-brazil-json/blob/master/demo.png)

## Sobre este projeto
Esse projeto foi um dos trabalhos práticos do Bootcamp Full Stack do [IGTI - Instituto de Gestão e Tecnologia da Informação](https://www.igti.com.br/), o principal objetivo foi manipular arquivos json utilizando módulos nativos do Node JS. 

Os arquivos passados para fazer a manipulação foram apenas [States.json](https://github.com/DuhBorba/cities-states-brazil-json/blob/master/src/States.json) onde contém 
todos os estados do Brasil com IDs e [Cities.json](https://github.com/DuhBorba/cities-states-brazil-json/blob/master/src/Cities.json), que contém quase todas as cidades do país, 
sendo que cada cidade possui um número do estado que a mesma pertence.

### Enunciado do trabalho
* Criar uma função que irá criar um arquivo JSON para cada estado representado no arquivo States.json, e o seu conteúdo será um array das cidades pertencentes a 
aquele estado, de acordo com o arquivo Cities.json. O nome do arquivo deve ser o UF do estado, por exemplo: MG.json.

* Criar uma função que recebe como parâmetro o UF do estado, realize a leitura do arquivo JSON correspondente e retorne a quantidade de cidades daquele estado.

* Criar um método que imprima no console um array com o UF dos cinco estados que mais possuem cidades, seguidos da quantidade, em ordem decrescente. 
Exemplo de impressão: [“UF - 93”, “UF - 82”, “UF - 74”, “UF - 72”, “UF - 65”]

* Criar um método que imprima no console um array com o UF dos cinco estados que menos possuem cidades, seguidos da quantidade, em ordem decrescente.
Exemplo de impressão: [“UF - 30”, “UF - 27”, “UF - 25”, “UF - 23”, “UF - 21”]

* Criar um método que imprima no console um array com a cidade de maior nome de cada estado, seguida de seu UF. 
Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]

* Criar um método que imprima no console um array com a cidade de menor nome de cada estado, seguida de seu UF. 
Por exemplo: [“Nome da Cidade – UF”, “Nome da Cidade – UF”, ...]

* Criar um método que imprima no console a cidade de maior nome entre todos os estados, seguido do seu UF. 
Exemplo: “Nome da Cidade - UF"

* Criar um método que imprima no console a cidade de menor nome entre todos os estados, seguido do seu UF. 
Exemplo: “Nome da Cidade - UF"

### IGTI
O Instituto de Gestão e Tecnologia da Informação, fundado em 2006, é uma instituição de ensino superior credenciada pelo MEC. 
É referência nacional na formação profissional em TI e Tecnologias Emergentes, e possui um modelo educacional a distância que prioriza a excelência acadêmica dos seus alunos

## Desenvolvimento

Para o desenvolvimento foi necessário:
* Manipular os arquivos json
* Utilizar o módulo FileSystem do Node.js
* Utilizar array methods como map, filter e sort
* Utilização de funções assíncronas através do async/await
* Utilização do try/catch

## Construído com

* JavaScript
* Node.js
* [Prettier](https://prettier.io/) - Formatador de código

## Autores

* [Eduardo Luis Borba](https://github.com/DuhBorba) :rocket:

## Licença

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes
