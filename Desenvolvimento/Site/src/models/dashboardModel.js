var executar = require("../database/conexao");

function totalViagens(res) {
    var instrucao = `SELECT COUNT(*) AS total FROM viagens;`;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function destinoMaisVisitado(res) {
    var instrucao = `
        SELECT destino, COUNT(*) AS qtd
        FROM viagens
        GROUP BY destino
        ORDER BY qtd DESC
        LIMIT 1;
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function mediaDuracao(res) {
    var instrucao = `SELECT ROUND(AVG(duracao), 1) AS media FROM viagens;`;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function totalUsuarios(res) {
    var instrucao = `SELECT COUNT(*) AS total FROM usuarios;`;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function graficoCompanhia(idUsuario, res) {
    var instrucao = `
        SELECT companhia, COUNT(*) AS qtd
        FROM viagens v
        JOIN userViagem uv ON v.idViagem = uv.idViagem
        WHERE uv.idUsuario = ${idUsuario}
        GROUP BY companhia;
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function ultimasViagens(idUsuario, res) {
    var instrucao = `
        SELECT destino, dtViagem, categoria
        FROM viagens v
        JOIN userViagem uv ON v.idViagem = uv.idViagem
        WHERE uv.idUsuario = ${idUsuario}
        ORDER BY v.dtViagem DESC
        LIMIT 5;
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function categoriaMaisVisitada(idUsuario, res) {
    var instrucao = `
        SELECT categoria, COUNT(*) AS qtd
        FROM viagens v
        JOIN userViagem uv ON v.idViagem = uv.idViagem
        WHERE uv.idUsuario = ${idUsuario}
        GROUP BY categoria
        ORDER BY qtd DESC
        LIMIT 1;
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function totalViagensUsuario(idUsuario, res) {
    var instrucao = `
        SELECT COUNT(*) AS total
        FROM userViagem
        WHERE idUsuario = ${idUsuario};
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

function graficoCompanhiaGeral(res) {
    var instrucao = `
        SELECT companhia, COUNT(*) AS qtd
        FROM viagens
        GROUP BY companhia;
    `;
    executar.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}

module.exports = {
    totalViagens,
    destinoMaisVisitado,
    mediaDuracao,
    totalUsuarios,
    graficoCompanhia,
    ultimasViagens,
    categoriaMaisVisitada,
    totalViagensUsuario,
    graficoCompanhiaGeral
};