
# Viagem Log

O Viagem.Log é uma plataforma web desenvolvida para registrar, organizar e visualizar experiências de viagem de forma simples e intuitiva. Voltado para exploradores e entusiastas de novos destinos, o sistema permite que os usuários documentem suas jornadas, acompanhem estatísticas e revejam memórias através de uma dashboard interativa. O objetivo é transformar cada viagem em um registro significativo e acessível, incentivando o planejamento consciente e a valorização das experiências vividas.


## Ferramentas Utilizadas

- Back-end: Node.js, MySQL, Express.js, Multer, [API web-data-viz](https://github.com/BandTec/web-data-viz.git)
- Front-end: HTML5, CSS3, JavaScript, Chart.js


## Funcionalidades:

- Cadastro e autenticação de usuários
- Cadastro de viagens com upload de foto da máquina local
- Dashboard com dados dinâmicos
- Visualização das viagens cadastradas por usuário


## Instalação

**Pré-requisitos**
- Node.js
- MySQL local ou em uma máquina virtual
- Opcional: Máquina Virtual Lubuntu

**Como instalar?** 

Clone o repositório

```bash
  git clone https://github.com/CamilaYukariJodai/Viagem.Log.git
```

Acesse o diretório do projeto

```bash
  cd Viagem.Log
```

Instale as dependências

```bash
  npm install
```
    
Inicie o servidor

```bash
  npm start
```
## Variáveis de ambiente

Para executar este projeto, é necessário criar um arquivo .env (em caso de acessar por uma VM) ou .env.dev (em caso de acessar pela máquina local) na raiz e definir as seguintes variáveis de ambiente:

`DB_HOST` = localhost  
`DB_USER` = seu_usuario  
`DB_PASSWORD` = sua_senha  
`DB_DATABASE` = viagemlog  
`PORT` = 3306/3307

Faça o upload do script MySQL no ambiente que desejar.

![Logo](https://raw.githubusercontent.com/CamilaYukariJodai/Viagem.Log/refs/heads/main/Desenvolvimento/Site/public/img/logo.png)

