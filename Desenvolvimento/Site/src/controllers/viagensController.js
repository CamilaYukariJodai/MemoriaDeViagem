var viagemModel = require("../models/viagensModel");

function cadastrar(req, res) {
    var destino = req.body.destino;
    var dtViagem = req.body.dtViagem;
    var duracao = req.body.duracao;
    var companhia = req.body.companhia;
    var categoria = req.body.categoria;
    var comentario = req.body.comentario;
    var imagem = req.file ? req.file.filename : null;
    var idUsuario = req.body.idUsuario;

    if (!destino || !dtViagem || !duracao || !companhia || !categoria || !comentario || !imagem || !idUsuario) {
        return res.status(400).send("Preencha todos os campos obrigatórios.");
    }

    viagemModel.cadastrarViagem(destino, dtViagem, duracao, companhia, categoria, comentario, imagem, idUsuario, res)
        .then(function (results) {
            console.log(results)
            res.status(201).send(results)
        }).catch(function (erro) {
            res.status(500).send(erro)
        })
}

function registrarUsuarioViagem(req, res) {
    var idUsuario = req.params.idUsuario;
    var idViagem = req.params.idViagem;

    console.log(idUsuario)
    console.log(idViagem)

    if (!idUsuario || !idViagem) {
        return res.status(400).send("Preencha todos os campos obrigatórios.");
    }

    viagemModel.registrarUsuarioViagem(idUsuario, idViagem)
        .then(function (results) {
            console.log(results);
            res.status(201).send(results);
        }).catch((function (erro) {
            res.status(500).send(erro);
        }))
}

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    viagemModel.listar(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao listar viagens:", erro.sqlMessage)
            res.status(500).json(erro.sqlMessage);
        });
}


function retornarImagens(req, res) {
    var idUsuario = req.params.idUsuario;
    var idViagem = req.params.idViagem;

    viagemModel.retornarImagens(idUsuario, idViagem)
    .then(function (resposta) {
        console.log(resposta);
        res.status(200).send(resposta[0]);
    })
    .catch(function (erro) {
        res.status(500).send(erro)
    })
}

function buscarViagens(req, res) {
    viagemModel.buscarViagens()
    .then(function (resposta) {
        res.status(200).send(resposta);
    })
    .catch(function (erro) {
        res.status(500).send(erro)
    })
}

module.exports = {
    cadastrar,
    registrarUsuarioViagem,
    retornarImagens,
    buscarViagens,
    listar
};