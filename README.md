## Projeto de Paginação e Filtro em Nextjs

Este projeto implementa um componente de paginação tradicional e infinita com filtro em Nextjs para exibir uma lista de posts filtráveis e pagináveis.


## /Exemplos paginação tradicional

* props

```javascript
 date, quantityforpage, search 
```

1. **Date** recebem todos os dados de um array
2. **quantityforpage** configura a quantidade de váriveis
3. **Search** filtra tudo o que for pesquisado

 * States

```javascript
  const [currentPage, Setcurrentpage] = useState(1);
  const [actualdate, SetActualdata] = useState([]);
  const totalnumpage = 5;
  const [filterdDate, SetfilteredDate] = useState([]);
```

1. **currentPage** Armazena o número da página atual.
2. **actualDate** Armazena os dados da página atual exibidos.
3. **totalNumPage** Define o número total de páginas exibidas.
4. **filteredDate** Armazena os dados filtrados com base na busca.

* useEffect


```javascript
  useEffect(() => {
    const firstItem = currentPage * quantityforpage;
    const lastitem = firstItem - quantityforpage;
    SetActualdata(filterdDate.slice(lastitem,      firstItem));
  }, [filterdDate, quantityforpage, currentPage]);
```

1. **firstItem** Recebe o state currentPage  = 1 * **quantityforpage** = Número definido no prop (10)

* firstItem = 10

2. **lastItem** = **firstItem** = 10 - quantityforpage = 10

* lastItem = 0

3. **Setactualdata** recebe os dados filtrados, mas podendo receber sem o filtro. 

  * O método **slice()** é utilizado para extrair uma parte de um array sem modificar o array original.
  * **\exemplo**

  ```javascript
 const frutas = ["🍎", "🍌", "🍇", "🍉", "🍒"];
const frutasSelecionadas = frutas.slice(1, 4); // Extrai do índice 1 ao 3 (4 não incluso)

console.log(frutasSelecionadas); // Output: [ '🍌', '🍇', '🍉' ]
```

 * **ActualDate** recebe toda a data com o lastitem e o firstIte.

 ```javascript
     SetActualdata(filterdDate.slice(0,10));
```
assim recebendo apenas os dados da pagina atual. 

* **\exemplo**

```javascript
 pagina 1
 
indiceUltimoItem = 1 * 10 = 10
indicePrimeiroItem = 10 - 10 = 0
dados.slice(0, 10) retorna os itens do índice 0 ao 9 (10 itens).

 pagina 2
 
indiceUltimoItem = 2 * 10 = 20
indicePrimeiroItem = 20 - 10 = 10
dados.slice(10, 20) retorna os itens do índice 0 ao 9 (10 itens).
```

## Instalação do Projeto

Este projeto utiliza Next.js para implementar a paginação de dados em um componente React. Siga os passos abaixo para configurar e executar o projeto localmente.

Pré-requisitos
* Certifique-se de ter o Node.js e npm (ou yarn) instalados em seu ambiente de desenvolvimento.

Passos para Instalação
Clone o repositório
 ```javascript
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
 ```

Execute o projeto
 ```javascript
npm run dev
 ```
