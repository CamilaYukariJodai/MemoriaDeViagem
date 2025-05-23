var executar = require("../database/conexao");

function cadastrarViagem(destino, data, duracao, companhia, categoria, comentario, imagem, idUsuario) {
  var instrucao = `
    INSERT INTO viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem)
    VALUES ('${destino}', '${data}', ${duracao}, '${companhia}', '${categoria}', '${comentario}', '${imagem}');
  `;

  var instrucao2 = `
    INSERT INTO userViagem (idUsuario, idViagem)
    SELECT ${idUsuario}, MAX(idViagem) FROM viagens;
  `;

  return executar.query(instrucao + instrucao2);
}

// function listar(idUsuario) {
//   var instrucao = `
//     SELECT v.destino, v.dtViagem, v.duracao, v.companhia, v.categoria, v.comentario
//     FROM viagens v
//     JOIN userViagem uv ON uv.idViagem = v.idViagem
//     WHERE uv.idUsuario = ${idUsuario};
//   `;
//   return database.executar(instrucao);
// }

module.exports = {
  cadastrarViagem,
  // listar
};
