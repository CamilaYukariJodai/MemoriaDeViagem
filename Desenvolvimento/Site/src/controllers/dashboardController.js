var dashboardModel = require("../models/dashboardModel");

function categoriaMais(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.categoriaMais(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function mediaDuracao(req, res) {
    dashboardModel.mediaDuracao().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function totalUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dashboardModel.totalUsuario(idUsuario).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

function companhiasGeral(req, res) {
    dashboardModel.companhiasGeral().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    categoriaMais,
    mediaDuracao,
    totalUsuario,
    companhiasGeral
};