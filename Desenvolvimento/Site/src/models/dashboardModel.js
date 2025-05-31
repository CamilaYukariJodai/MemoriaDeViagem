var executar = require("../database/conexao");

function categoriaMais(idUsuario) {
    var instrucao = `
        SELECT categoria, COUNT(*) as total
        FROM viagens
        JOIN userViagem ON viagens.idViagem = userViagem.idViagem
        WHERE idUsuario = ${idUsuario}
        GROUP BY categoria
        ORDER BY total DESC
        LIMIT 1;
    `;
    return executar(instrucao);
}

function mediaDuracao() {
    var instrucao = `
        SELECT ROUND(AVG(duracao), 1) AS media
        FROM viagens;
    `;
    return executar(instrucao);
}

function totalUsuario(idUsuario) {
    var instrucao = `
        SELECT COUNT(*) AS total
        FROM userViagem
        WHERE idUsuario = ${idUsuario};
    `;
    return executar(instrucao);
}

function companhiasGeral() {
    var instrucao = `
        SELECT companhia, COUNT(*) as qtd
        FROM viagens
        GROUP BY companhia;
    `;
    return executar(instrucao);
}

module.exports = {
    categoriaMais,
    mediaDuracao,
    totalUsuario,
    companhiasGeral
};