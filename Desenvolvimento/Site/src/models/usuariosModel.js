const db = require("../database/conexao");

function inserir(nome, email, senha, callback) {
  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, senha], callback); // <-- aqui dá erro se db não tiver .query()
}

module.exports = { inserir };
