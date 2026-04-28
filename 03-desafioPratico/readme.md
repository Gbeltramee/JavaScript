# 🚀 Desafio Backend - API de Controle de Chamados de TI

## 📌 Objetivo

Este projeto foi criado como um **desafio prático** para consolidar conhecimentos em desenvolvimento backend utilizando:

* Node.js
* Express
* MongoDB (Mongoose)
* Arquitetura MVC

O foco não é apenas fazer funcionar, mas sim construir uma API **organizada, escalável e próxima de um cenário real de negócio**.

---

## 🧠 Contexto do Desafio

Você foi responsável por desenvolver uma API para gerenciamento de chamados de TI dentro de uma empresa.

O sistema deve permitir:

* Registro de chamados por usuários
* Classificação por categoria e prioridade
* Acompanhamento de status
* Interação via comentários
* Histórico de alterações

---

## 🏗️ Arquitetura

O projeto segue o padrão **MVC (Model - View - Controller)** adaptado para APIs:

```txt
Request → Route → Controller → Service → Model → Database
```

Separação de responsabilidades:

* **Models:** Estrutura dos dados (MongoDB)
* **Controllers:** Entrada e saída da requisição
* **Services:** Regras de negócio
* **Routes:** Definição dos endpoints
* **Middlewares:** Validações e tratamento de erros

---

## 📂 Estrutura do Projeto

```txt
src/
 ├── config/
 ├── controllers/
 ├── models/
 ├── routes/
 ├── services/
 ├── middlewares/
 ├── utils/
 ├── app.js
 └── server.js
```

---

## ⚙️ Requisitos do Desafio

### 🔹 Entidades principais

* Usuário
* Categoria
* Chamado
* Comentário
* Histórico de Chamado

---

### 🔹 Funcionalidades obrigatórias

#### Usuários

* Criar usuário
* Listar usuários
* Buscar por ID

#### Categorias

* Criar categoria
* Listar categorias

#### Chamados

* Criar chamado
* Listar chamados
* Buscar chamado por ID
* Atualizar chamado
* Alterar status
* Excluir chamado

#### Comentários

* Adicionar comentário ao chamado
* Listar comentários de um chamado

---

## 📊 Regras de Negócio

* Todo chamado deve iniciar com status **"ABERTO"**
* Status permitidos:

  * ABERTO
  * EM_ATENDIMENTO
  * RESOLVIDO
  * CANCELADO
* Um chamado não pode ser finalizado sem responsável técnico
* Prioridades permitidas:

  * BAIXA
  * MEDIA
  * ALTA
  * CRITICA

---

## 🧪 Testes

Utilize ferramentas como:

* Postman
* Insomnia

Para validar todos os endpoints da API.

---

## 🎯 Objetivo Final

Ao concluir este desafio, você deve ser capaz de:

* Estruturar um backend profissional
* Aplicar corretamente o padrão MVC
* Separar responsabilidades de forma clara
* Implementar regras de negócio reais
* Trabalhar com MongoDB de forma eficiente

---

## 📈 Evolução Esperada

Este projeto pode evoluir para:

* Sistema completo de Service Desk
* Integração com frontend (React, Vue, etc.)
* Integração com ferramentas externas (Slack, WhatsApp, etc.)
* Uso em ambiente produtivo com Docker e VPS

---

## 💡 Observação

O mais importante neste desafio não é apenas concluir, mas **como você constrói**:

* Código limpo
* Organização
* Boas práticas
* Clareza na lógica

---

**Boa prática leva à consistência. Consistência leva à maturidade técnica.**
