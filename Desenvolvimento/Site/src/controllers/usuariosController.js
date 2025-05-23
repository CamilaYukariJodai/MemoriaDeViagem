var usuarioModel = require("../models/usuariosModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!nome || !email || !senha) {
        res.status(400).send("Preencha todos os campos.");
    } else {
        usuarioModel.cadastrar(nome, email, senha)
            .then(() => {
                res.status(200).send("Cadastro realizado com sucesso!");
            })
            .catch((erro) => {
                console.error(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        res.status(400).send("Preencha todos os campos.");
    } else {
        usuarioModel.autenticar(email, senha)
            .then((resultado) => {
                if (resultado.length > 0) {
                    res.status(200).json({
                        id: resultado[0].idUsuario,
                        nome: resultado[0].nome
                    });
                } else {
                    res.status(403).send("E-mail e/ou senha inválidos");
                }
            })
            .catch((erro) => {
                console.error(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


module.exports = {
    cadastrar,
    autenticar
};
