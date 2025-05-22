const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

conexao.connect(function (erro) {
    if (erro) {
        console.error("Erro na conexão com o banco:", erro.sqlMessage);
        return;
    }
    console.log("Conectado ao banco com sucesso!");
});

module.exports = conexao;