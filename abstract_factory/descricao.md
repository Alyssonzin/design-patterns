## Abstract Factory

O **Abstract Factory** é um padrão de criação que fornece uma interface para criar **famílias de objetos relacionados ou dependentes** sem expor as classes concretas. Em vez de instanciar diretamente cada tipo, o cliente trabalha com uma fábrica abstrata e com produtos abstratos, o que permite trocar facilmente a família inteira de objetos em tempo de execução ou configuração.

### Para que serve
- **Isolar a criação** de objetos complexos e relacionados.
- **Garantir compatibilidade** entre produtos de uma mesma família.
- **Reduzir acoplamento** entre o código cliente e classes concretas.

### Quando é indicado utilizar
- Quando o sistema precisa **suportar múltiplas famílias** de produtos (ex.: diferentes variantes de UI, veículos, relatórios etc.).
- Quando é necessário **trocar a família de objetos** sem alterar o código cliente.
- Quando há **restrições de compatibilidade** entre objetos criados juntos.
- Quando a criação de objetos é **complexa ou repetitiva** e deve ficar centralizada.

### Benefícios
- Melhora a **manutenibilidade** e a **testabilidade**.
- Facilita a **evolução** do sistema ao adicionar novas famílias de produtos.
- Mantém o cliente **independente** das implementações concretas.

### Diferença para Simple Factory
- **Simple Factory** centraliza a criação de **um conjunto de objetos** em uma classe/função, mas **não** trabalha com famílias de produtos nem exige interfaces formais. É uma solução mais simples e informal.
- **Abstract Factory** define **interfaces para fábricas e produtos**, permitindo **várias famílias relacionadas** e garantindo compatibilidade entre os objetos criados.
- Em geral, use **Simple Factory** para cenários simples com poucas variações; use **Abstract Factory** quando houver **múltiplas famílias** e necessidade de troca consistente entre elas.

### Atenções
- Pode aumentar a **complexidade inicial** com mais interfaces e classes.
- É mais útil quando há **variações reais** entre famílias de produtos.
