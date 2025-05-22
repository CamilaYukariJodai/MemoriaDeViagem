var conexao = require("../database/conexao");

function cadastrarViagem(destino, dtViagem, duracao, companhia, categoria, comentario, imagem, idUsuario, res) {
    var instrucao1 = `
        INSERT INTO viagens (destino, dtViagem, duracao, companhia, categoria, comentario, imagem)
        VALUES ('${destino}', '${dtViagem}', '${duracao}', '${companhia}', '${categoria}', '${comentario}', '${imagem}');
    `;

    conexao.query(instrucao1, function (erro1, resultado1) {
        if (erro1) {
            console.log("Erro ao cadastrar viagem:", erro1.sqlMessage);
            res.status(500).json(erro1.sqlMessage);
            return;
        }

        var idViagem = resultado1.insertId;

        var instrucao2 = `
            INSERT INTO userViagem (idUsuario, idViagem)
            VALUES ('${idUsuario}', '${idViagem}');
        `;

        conexao.query(instrucao2, function (erro2, resultado2) {
            if (erro2) {
                console.log("Erro ao vincular viagem ao usuário:", erro2.sqlMessage);
                res.status(500).json(erro2.sqlMessage);
                return;
            }

            res.status(200).json({ mensagem: "Viagem cadastrada com sucesso!" });
        });
    });
}

function listarViagensUsuario(idUsuario, res) {
    var instrucao = `
        SELECT v.destino, v.dtViagem, v.duracao, v.companhia, v.categoria, v.comentario
        FROM viagens v
        JOIN userViagem uv ON v.idViagem = uv.idViagem
        WHERE uv.idUsuario = ${idUsuario};
    `;
    db.query(instrucao, function (erro, resultado) {
        if (erro) {
            res.status(500).json(erro);
        } else {
            res.status(200).json(resultado);
        }
    });
}


module.exports = {
    cadastrarViagem,
    listarViagensUsuario
};
