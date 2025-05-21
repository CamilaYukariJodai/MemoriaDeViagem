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
        res.status(400).send("Preencha todos os campos obrigatórios.");
        return;
    }

    viagemModel.cadastrarViagem(destino, dtViagem, duracao, companhia, categoria, comentario, imagem, idUsuario, res);
}

module.exports = {
    cadastrar
};
