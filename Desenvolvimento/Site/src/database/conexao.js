var mysql = require('mysql2');

var conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Camiyj10!",
  database: "viagemlog"
});

module.exports = conexao;
