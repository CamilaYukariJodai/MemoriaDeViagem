var conexao = require("../database/conexao");

function cadastrar(destino, dtViagem, duracao, companhia, categoria, comentario, imagem) {
  var instrucao = `
    INSERT INTO viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem)
    VALUES ('${destino}', '${dtViagem}', ${duracao}, '${companhia}', '${categoria}', '${comentario}', '${imagem}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return conexao.query(instrucao);
}

module.exports = {
  cadastrar,
};
