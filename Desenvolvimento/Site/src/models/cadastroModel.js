const db = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into usuario (nome, email, imagem_perfil) values ('${usuario.nome}', '${usuario.email}', '${usuario.imagem}')`;

  return database.executar(instrucao);
}

function buscarUsuarioPeloId(id) {
  const instrucao = `select * from usuario where id = ${id}`;

  return database.executar(instrucao);
}

function inserirUsuario(nome, email, senha) {
  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";
  db.query(sql, [nome, email, senha]);
}

function inserirViagem(idUsuario, destino, data, companhia, categoria, comentario, foto) {
  var sql = "INSERT INTO viagens (id_usuario, destino, dtViagem, companhia, categoria, comentario, imagem) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(sql, [idUsuario, destino, data, companhia, categoria, comentario, foto]);
}

module.exports = {
  inserirUsuario,
  inserirViagem,
  salvar,
  buscarUsuarioPeloId
};
