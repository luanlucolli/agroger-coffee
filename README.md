# Agroger Coffee

Agroger Coffee é uma aplicação criada como solução para o **Desafio Agroger 2025**. O objetivo do desafio era desenvolver um projeto front-end usando **Vite + React**, compondo uma interface limpa, responsiva e funcional, com atenção a **componentização, boas práticas de código, chamadas HTTP e testes unitários**.

---

## ✳️ Sobre o desafio

A proposta era transformar uma tela simples em um aplicativo funcional com uma única ação: um botão que dispara uma requisição HTTP e renderiza dados em uma lista abaixo. A ideia era aplicar boas práticas de UI/UX, estrutura de código, organização e criatividade.

---

## 📦 Tecnologias utilizadas

- **Vite + React + TypeScript** (estrutura moderna e leve)
- **React Bootstrap** (responsividade com grid de forma rápida)
- **CSS Modules** (isolamento de estilos por componente)
- **Vitest + Testing Library** (testes unitários)
- **React Toastify** (feedback visual ao usuário)
- **AwesomeAPI** (cotação do dólar em tempo real)
- **SampleAPIs** (base pública de cafés)

---

## 🔧 Funcionalidades implementadas

- Botão para adicionar cafés aleatórios (sem repetição)
- Listagem com:
  - Foto do café
  - Título
  - Tipo (quente ou frio)
  - Preço convertido para reais (R$)
- Barra de pesquisa por nome
- Filtros por tipo de café (quente, frio ou todos)
- Exclusão de cafés com persistência em localStorage
- Toasts minimalistas para informar ações (erro, sucesso, info)
- Skeleton loaders enquanto a imagem carrega
- Placeholder com ícone e mensagem quando a lista está vazia
- Cotação do dólar obtida via HTTP ao iniciar a aplicação
- Testes unitários para os principais componentes

---

## 📁 Estrutura organizada

Todo o projeto foi dividido cuidadosamente:

```
src/
├── components/
│   ├── CoffeeCard/
│   ├── FilterBar/
│   ├── SearchBar/
│   ├── Placeholder/
│   └── Toast/
├── pages/
│   └── HomePage.tsx
├── services/
│   ├── api.ts         # Requisições para cafés
│   └── currency.ts    # Requisição para cotação
├── types/
│   └── Coffee.ts
├── tests/
│   ├── CoffeeCard.test.tsx
│   ├── FilterBar.test.tsx
│   └── SearchBar.test.tsx
```

---

## 🔬 Testes

Foram implementados testes com **Vitest** e **Testing Library**. Testei:

- Entrada e callback do `SearchBar`
- Troca de filtros no `FilterBar`
- Renderização e exclusão no `CoffeeCard`

```bash
npm run test
```

---

## 🧪 Testes manuais validados

- [x] Adicionar cafés sem repetir
- [x] Exclusão persistente no localStorage
- [x] Toasts informativos
- [x] Filtros funcionais
- [x] Busca por nome
- [x] Requisições à API de cafés
- [x] Requisição à cotação do dólar
- [x] Mensagem placeholder quando lista estiver vazia

---

## 🧠 Decisões de design e estrutura

- **Nome e tema**: optei por cafés, em sintonia com o exemplo visual do PDF.
- **Cotação real**: converti o preço da API (em dólar) para reais, trazendo realismo.
- **Estilo visual**: respeitei o layout proposto, mas evoluímos com responsividade, contraste e feedback ao usuário.
- **Componentização total**: cada parte da UI tem seu próprio módulo e estilo isolado.

---

## 🚀 Como rodar

```bash
git clone https://github.com/luanlucolli/agroger-coffee
cd agroger-coffee
npm install
npm run dev
```

---

## ✅ Conclusão

Todo o desafio foi seguido à risca e cada parte foi pensada com foco em **organização, boas práticas e clareza de código**. O resultado é uma aplicação leve, responsiva, funcional e que simula muito bem um ambiente de produção.

