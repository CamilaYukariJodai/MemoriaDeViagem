var usuarioModel = require("../models/usuariosModel");

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!nome || !email || !senha) {
        res.status(400).send("Preencha todos os campos.");
    } else {
        usuarioModel.cadastrar(nome, email, senha, res);
    }
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (!email || !senha) {
        res.status(400).send("Email e/ou senha estão em branco.");
    } else {
        usuarioModel.autenticar(email, senha, res);
    }
}

module.exports = {
    cadastrar,
    autenticar
};
