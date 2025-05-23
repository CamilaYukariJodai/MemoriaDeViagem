var executar = require("../database/conexao");

function cadastrar(nome, email, senha) {
  var instrucao = `
    INSERT INTO usuarios (nome, email, senha)
    VALUES ('${nome}', '${email}', '${senha}');
  `;
  return executar(instrucao);
}

function autenticar(email, senha) {
    var instrucao = `
        SELECT * FROM usuarios
        WHERE email = '${email}' AND senha = '${senha}'
        LIMIT 1;
    `;

    return executar(instrucao)
}

module.exports = {
    cadastrar,
    autenticar
};
