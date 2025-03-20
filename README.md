# Gestor Escolinha de Futebol

Este projeto é um sistema de gerenciamento para escolinhas de futebol de bairro, com foco em ação social

. Ele inclui um **frontend** em React, um **backend** em Node.js e uma **landing page** estática.

## Como Rodar o Projeto Localmente

Siga os passos abaixo para configurar e rodar o projeto no seu ambiente local.

### 1. Clonar o Repositório

Abra o terminal e execute os seguintes comandos:

```bash
git clone https://github.com/Pedroviz/Gestor_escolinha_futebol1.git
cd Gestor_escolinha_futebol

## 2. Configurar o Backend (Node.js)

1. Entre na pasta do backend:

```
bash
```
```
cd backend
```
2. Instale as dependências:
    bash

```
npm install
```
3. Crie o arquivo .env na pasta do backend com as seguintes variáveis de ambiente:
    env

```
PORT=
MONGO_URI=mongodb+srv://<usuário>:<senha>@cluster0.mongodb.net/escolinha
Substitua <usuário> e <senha> pelas suas credenciais do MongoDB.
```
4. Inicie o servidor do backend:
    bash

```
npm start
O backend estará rodando em: http://localhost:5000.
```
## 3. Configurar o Frontend (React)

1. Volte para a pasta principal e entre na pasta do frontend:

```
bash
```
```
cd ../frontend/escolinha
```
2. Instale as dependências:
    bash

```
npm install
```

3. Crie o arquivo .env na pasta do frontend com as seguintes variáveis de ambiente:
    env

```
REACT_APP_API_URL=http://localhost:
REACT_APP_BASE_URL=http://localhost:
```
4. Inicie o servidor do frontend:
    bash

```
npm start
O frontend estará acessível em: http://localhost:3000.
```
## 4. Configurar a Landing Page

A landing page é um site estático que pode ser aberto diretamente no navegador. Para
visualizá-la:

1. Abra o arquivo index.html na pasta raiz do projeto (/Gestor_escolinha_futebol1/index.html) no
    seu navegador.

# Estrutura do Projeto

A estrutura do projeto é a seguinte:

Copy
/Gestor_escolinha_futebol
│
├── /frontend
│ ├── /escolinha
│ │ ├── /public
│ │ ├── /src
│ │ ├── package.json
│ │ └── ...
│ └── ...
│
├── /backend
│ ├── server.js
│ ├── package.json
│ └── ...
│
├── /landing-page
│ ├── index.html
│ ├── styles.css
│ └── ...
│
└── README.md

# Dicas Importantes


```
 Erros no Backend :
o Verifique se a porta 5000 está livre.
o Verifique se o MongoDB está rodando e acessível.
 Erros no Frontend :
o Se houver problemas com dependências, delete a pasta node_modules e
reinstale:
```
```
bash
```
```
rm - rf node_modules package-lock.json
npm install
 Atualizações do Código :
o Para atualizar seu repositório local com as últimas mudanças, use:
```
```
bash
```
```
git pull origin main
 Contribuindo com o Projeto :
o Crie uma nova branch para suas alterações:
```
```
bash
```
```
git checkout -b minha-branch
o Após fazer as alterações, envie um Pull Request para a branch main.
```
# Como Contribuir

1. Faça um **fork** do repositório.
2. Crie uma nova branch para suas alterações:
    bash

```
git checkout -b minha-branch
```
3. Faça as alterações necessárias e commit:
    bash

```
git add.
git commit -m "Descrição das alterações"
```
4. Envie as alterações para o repositório remoto:
    bash

```
git push origin minha-branch
```
5. Abra um **Pull Request** no GitHub para revisão.


# Tecnologias Utilizadas

```
 Frontend : React, TailwindCSS
 Backend : Node.js, Express, MongoDB
 Landing Page : HTML, CSS
```
# Links Úteis

```
 Repositório no GitHub : https://github.com/Pedroviz/Gestor_escolinha_futebol
 Frontend no Vercel : https://gestor-escolinha-frontend.vercel.app
 Backend no Vercel : https://gestor-escolinha-backend.vercel.app
 Landing Page no Vercel : https://gestor-escolinha-landing.vercel.app
```
# Autores

```
 Millene de Souza Junior
 João Eduardo Lúcio Araújo
 Pedro Atila Freitas Costa
 João Eduardo Lúcio Araújo
```
# Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais
detalhes.
