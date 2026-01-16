# Adapter

O padrão Adapter é um padrão estrutural que permite integrar classes com interfaces incompatíveis. 
Ele cria uma camada intermediária (adaptador) que traduz chamadas de um cliente para o formato esperado por um componente existente.

Sua principal função é reutilizar código legado ou de terceiros sem alterar a implementação do seu software, 
facilitando a interoperabilidade entre módulos e reduzindo acoplamento.

## Exemplo deste projeto

O gerador de relatórios depende apenas de interfaces (adapter), não de bibliotecas concretas. Isso dá liberdade para trocar a biblioteca de PDF (ex.: pdfkit por outra) e também o mecanismo de file storage (ex.: Node FS por S3 ou memória) sem alterar o código principal. Em outras palavras, o adapter protege o núcleo do sistema de mudanças externas e reduz o custo de manutenção.

Mais informações em: https://refactoring.guru/design-patterns/adapter
