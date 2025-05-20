var conexao = require("../database/conexao");

function autenticar(email, senha) {
  var instrucao = `
        SELECT * FROM usuarios
        WHERE email = ? AND senha = ?;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return conexao.query(instrucao, [email, senha]);
}

function cadastrar(nome, email, senha) {
  var instrucao = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES (?, ?, ?);
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return conexao.query(instrucao, [nome, email, senha]);
}

module.exports = {
  autenticar,
  cadastrar,
};
