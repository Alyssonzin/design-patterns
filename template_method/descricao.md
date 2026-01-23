
# Template Method

O **Template Method** define o esqueleto de um algoritmo em uma classe base e permite que subclasses personalizem etapas específicas sem alterar a estrutura geral do fluxo. Ele é útil quando você quer **padronizar um processo** (ex.: validação, cobrança, geração de relatório) mas **variar alguns passos** dependendo do contexto.

## Para que serve

- **Reuso de lógica comum**: as etapas compartilhadas ficam na classe base.
- **Consistência de fluxo**: o algoritmo principal é fixo e confiável.
- **Extensibilidade controlada**: subclasses podem variar comportamentos em pontos pré‑definidos.

## Componentes principais

1. **Template Method**
	- Método principal que define a sequência de passos do algoritmo.
	- Normalmente é `public` e **não deve ser sobrescrito**.

2. **Operações primitivas (abstract/override)**
	- Passos que **precisam** ser implementados pelas subclasses.
	- Geralmente são `protected abstract`.

3. **Hooks (opcionais)**
	- Métodos opcionais com implementação padrão (ex.: no‑op ou retorno padrão).
	- Subclasses **podem** sobrescrever se precisarem ajustar o comportamento.

4. **Métodos concretos auxiliares**
	- Passos comuns reutilizados pelo template.
	- Geralmente `protected` e não sobrescritos.

Mais informações em: https://refactoring.guru/design-patterns/template-method
