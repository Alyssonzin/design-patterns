## Padrão Composite

O padrão Composite serve para tratar objetos individuais e composições de objetos da mesma forma. Ele define uma interface comum (componente base) e permite que clientes trabalhem com uma estrutura em árvore sem precisar diferenciar se estao lidando com um item simples (folha) ou com um conjunto de itens (composite).

Benefícios principais:
- Composição uniforme: o cliente chama o mesmo método para itens e grupos.
- Estruturas hierárquicas ficam simples de montar e percorrer.
- Facilita adicionar novos tipos de itens sem mudar o código cliente.

## Exemplo deste exercício

Neste exemplo, o componente base é a interface `Item`, que define o método `getPrice()`.

- `Product` (folha) representa um produto individual, com nome e preço. Seu `getPrice()` retorna o preço do produto.
- `ProductBox` (composite) representa uma caixa que pode conter varios `Item` (produtos e/ou outras caixas). Seu `getPrice()` soma o preço de todos os itens internos, chamando `getPrice()` de cada um.

No `index.ts`:
- Sao criados produtos individuais (arroz, feijao, milho, etc.).
- Os produtos sao agrupados em duas caixas (`caixaDeGraos` e `caixaDeDoces`).
- Uma caixa maior (`caixaGrande`) recebe essas duas caixas, formando uma hierarquia.
- O código calcula o total de cada caixa e o total geral usando o mesmo método `getPrice()`, sem precisar saber se o item é um produto ou caixa.

Isso demonstra o objetivo do Composite: permitir que uma estrutura de objetos (produtos e caixas) seja manipulada de maneira uniforme.

Mais informações em: https://refactoring.guru/design-patterns/composite