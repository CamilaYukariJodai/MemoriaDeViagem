const mysql = require("mysql2");

const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

module.exports = conexao.promise();