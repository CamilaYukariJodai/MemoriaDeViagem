var conexao = require("../database/conexao");

function cadastrar(nome, email, senha, res) {
    var instrucao = `
        INSERT INTO usuarios (nome, email, senha)
        VALUES ('${nome}', '${email}', '${senha}');
    `;

    conexao.query(instrucao, function (erro, resultado) {
        if (erro) {
            console.log("Erro ao cadastrar usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
            return;
        }

        res.status(200).json({ mensagem: "Usuário cadastrado com sucesso!" });
    });
}

function autenticar(email, senha, res) {
    var instrucao = `
        SELECT * FROM usuarios
        WHERE email = '${email}' AND senha = '${senha}'
        LIMIT 1;
    `;

    conexao.query(instrucao, function (erro, resultado) {
        if (erro) {
            console.log("Erro ao autenticar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
            return;
        }

        if (resultado.length == 1) {
            res.status(200).json({
                idUsuario: resultado[0].idUsuario,
                nome: resultado[0].nome,
                email: resultado[0].email
            });
        } else if (resultado.length == 0) {
            res.status(403).send("Email e/ou senha inválidos.");
        } else {
            res.status(403).send("Mais de um usuário com o mesmo login e senha.");
        }
    });
}

module.exports = {
    cadastrar,
    autenticar
};
