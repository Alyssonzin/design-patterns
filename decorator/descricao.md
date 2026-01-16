# Padrão Decorator

## O que é

O Decorator é um padrão estrutural que permite adicionar comportamentos ou responsabilidades a objetos dinamicamente, sem modificar sua classe original. Ele funciona "envolvendo" um objeto com outro que adiciona funcionalidades extras.

## Como funciona

- Um decorator implementa a mesma interface do objeto que está decorando
- Delega chamadas ao objeto interno e adiciona comportamento extra antes/depois

## Cenários indicados

1. **Adicionar funcionalidades de forma incremental** - quando você precisa combinar múltiplas funcionalidades opcionais de diferentes maneiras

2. **Evitar explosão de subclasses** - ao invés de criar classes para cada combinação (ImagemComBordaEMarcaDagua, ImagemComBordaEFiltro, etc.), você compõe decorators

3. **Responsabilidades removíveis** - quando funcionalidades podem ser adicionadas/removidas em tempo de execução

4. **Extensão sem modificação** - seguindo o princípio Open/Closed, você estende funcionalidades sem alterar código existente

## Exemplos práticos

- Processamento de imagens (filtros, marcas d'água, bordas)
- Streams de I/O (BufferedReader decorando FileReader)
- UI components (scroll bars, borders em componentes gráficos)
- Adicionar logs, cache ou validação a operações existentes

Mais informações em: https://refactoring.guru/design-patterns/decorator