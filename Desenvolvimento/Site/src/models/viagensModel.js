var executar = require("../database/conexao");

function cadastrarViagem(destino, data, duracao, companhia, categoria, comentario, imagem, idUsuario) {
  var instrucao1 = `
    INSERT INTO viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem)
    VALUES ('${destino}', '${data}', ${duracao}, '${companhia}', '${categoria}', '${comentario}', '${imagem}');
  `;

  return executar(instrucao1).then(resultado => {
    var idViagem = resultado.insertId;

    var instrucao2 = `
      INSERT INTO userViagem (idUsuario, idViagem)
      VALUES (${idUsuario}, ${idViagem});
    `;

    return executar(instrucao2);
  });
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
