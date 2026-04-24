# BlogAPI

API REST para gerenciamento de um blog pessoal, com autenticação JWT, cadastro de usuários, postagens e temas. Desenvolvida com NestJS, TypeORM e MySQL.

---

## 🚀 Deploy

🔗 [Acessar API no Render](#) *(link em breve)*

---

## 🛠️ Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [JWT](https://jwt.io/)
- [Jest](https://jestjs.io/) + [Supertest](https://github.com/ladjs/supertest)

---

## 📦 Módulos

| Módulo | Descrição |
|---|---|
| `auth` | Autenticação via JWT |
| `usuario` | Cadastro, login e gerenciamento de usuários |
| `postagem` | Criação e gerenciamento de postagens |
| `tema` | Categorização de postagens por tema |

---

## 🔌 Endpoints principais

### Usuários
| Método | Rota | Descrição | Auth |
|---|---|---|---|
| POST | `/usuarios/cadastrar` | Cadastra novo usuário | ❌ |
| POST | `/usuarios/logar` | Autentica usuário e retorna token | ❌ |
| GET | `/usuarios/all` | Lista todos os usuários | ✅ |
| PUT | `/usuarios/atualizar` | Atualiza dados do usuário | ✅ |

---

## ⚙️ Como rodar localmente

### Pré-requisitos

- Node.js
- MySQL
- npm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/JhonatanMiranda221/blog-api.git

# Acesse a pasta
cd blog-api

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=blogapi
JWT_SECRET=sua_chave_secreta
```

### Rodando o servidor

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
```

---

## 🧪 Testes

```bash
# Testes E2E
npm run test:e2e

# Cobertura
npm run test:cov
```

Os testes E2E cobrem:
- Cadastro de usuário
- Bloqueio de cadastro duplicado
- Login e geração de token JWT
- Listagem autenticada de usuários
- Atualização de dados do usuário

---

## 👨‍💻 Autor

Jhonatan Miranda  
[LinkedIn](https://www.linkedin.com/in/devjhonatanmiranda/) • [GitHub](https://github.com/JhonatanMiranda221)
