var dashboardModel = require("../models/dashboardModel");

function totalViagens(req, res) {
    dashboardModel.totalViagens(res);
}

function destinoMaisVisitado(req, res) {
    dashboardModel.destinoMaisVisitado(res);
}

function mediaDuracao(req, res) {
    dashboardModel.mediaDuracao(res);
}

function totalUsuarios(req, res) {
    dashboardModel.totalUsuarios(res);
}

function graficoCompanhia(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.graficoCompanhia(idUsuario, res);
}

function ultimasViagens(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.ultimasViagens(idUsuario, res);
}

function categoriaMaisVisitada(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.categoriaMaisVisitada(idUsuario, res);
}

function totalViagensUsuario(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.totalViagensUsuario(idUsuario, res);
}

function graficoCompanhiaGeral(req, res) {
    dashboardModel.graficoCompanhiaGeral(res);
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
