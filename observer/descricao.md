# Observer

O Observer é um padrão comportamental que define uma relação de um-para-muitos entre objetos. Quando o objeto observado (Subject) muda de estado, ele notifica automaticamente todos os observadores (Observers) registrados, permitindo que cada um reaja à mudança sem acoplamento direto ao Subject.

É composto por uma classe OBSERVADA e por classes OBSERVADORAS, que estão interessadas em algum EVENTO que ocorre na classe observada.

## Indicações de uso

- Notificar vários componentes sobre mudanças em um objeto central, sem que eles conheçam uns aos outros.
- Manter baixo acoplamento entre quem emite eventos e quem reage a eles, permitindo que cada observador reaja de uma forma específica
  ao evento.
- Implementar sistemas orientados a eventos, como atualizações de interface, cache, logs, métricas ou integrações reativas.

Em resumo, use Observer quando houver a necessidade de propagar mudanças de estado para múltiplas classes interessadas de
forma flexível e desacoplada.

## Neste projeto

No código de exemplo, queremos observar as mudanças de preço que ocorrem no Bitcoin. Sempre que uma mudança de preço ocorrer, precisamos
emitir um log no sistema, notificar os investidores de que houve uma mudança no preço e enviar uma notícia ao nosso portal de notícias.

Cada observador deve tratar suas próprias regras de negócio e avaliar quando (e se deve) executar suas funções. Por exemplo,
não queremos notificar o usuário a cada variação mínima do bitcoin, mas somente quando houver uma variação de no mínimo 10% do valor.

Resumo completo: https://refactoring.guru/design-patterns/observer
