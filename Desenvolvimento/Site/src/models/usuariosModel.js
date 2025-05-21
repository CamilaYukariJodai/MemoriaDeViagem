var conexao = require("../database/conexao");

function autenticar(email, senha) {
  var instrucao = `
    SELECT * FROM usuarios
    WHERE email = '${email}' AND senha = '${senha}'
    LIMIT 1;
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return conexao.promise().query(instrucao); // ✅ USAR .promise()
}

function cadastrar(nome, email, senha) {
  var instrucao = `
    INSERT INTO usuarios (nome, email, senha)
    VALUES (?, ?, ?);
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return conexao.promise().query(instrucao, [nome, email, senha]); // ✅ USAR .promise()
}

module.exports = {
  autenticar,
  cadastrar,
};
