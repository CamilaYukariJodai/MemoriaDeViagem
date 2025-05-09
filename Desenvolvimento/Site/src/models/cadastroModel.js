var db = require("../database/conexao");

function inserirUsuario(nome, email, senha, callback) {
  var sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, senha], callback);
}

function inserirViagem(idUsuario, destino, data, companhia, foto, callback) {
  var sql = "INSERT INTO viagens (id_usuario, destino, dtViagem, companhia, imagem) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [idUsuario, destino, data, companhia, foto], callback);
}

module.exports = {
  inserirUsuario,
  inserirViagem
};
