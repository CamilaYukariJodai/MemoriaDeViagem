var executar = require("../database/conexao");

function cadastrarViagem(destino, dtViagem, duracao, companhia, categoria, comentario, imagem) {
  var instrucao1 = `
    INSERT INTO viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem)
    VALUES ('${destino}', '${dtViagem}', ${duracao}, '${companhia}', '${categoria}', '${comentario}', '${imagem}');
  `;

  return executar(instrucao1)
}

function registrarUsuarioViagem (idUsuario, idViagem) {
  var instrucao = `
     INSERT INTO userViagem (idUsuario, idViagem)
      VALUES (${idUsuario}, ${idViagem});
  `;

  return executar(instrucao);
}

function retornarImagens(idUsuario, idViagem) {
  var instrucao = `
    select v.imagem from userViagem uv 
      join viagens v on uv.idViagem = v.idViagem 
      join usuarios u on u.idUsuario = uv.idUsuario  
      where u.idUsuario = ${idUsuario} AND v.idViagem = ${idViagem};
  `;

  return executar(instrucao);
}

function buscarViagens() {
  var instrucao = `select * from userViagem`;

  return executar(instrucao);
}

function listar(idUsuario) {
  var instrucao = `
    SELECT v.*
    FROM viagens v
    JOIN userViagem uv ON v.idViagem = uv.idViagem
    WHERE uv.idUsuario = ${idUsuario}
    ORDER BY v.dtViagem DESC;
  `;
  return executar(instrucao);
}

module.exports = {
  cadastrarViagem,
  registrarUsuarioViagem,
  retornarImagens,
  buscarViagens,
  listar
};
