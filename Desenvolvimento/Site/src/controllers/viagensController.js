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

// function listar(req, res) {
//     var idUsuario = req.params.idUsuario;

//     viagemModel.listar(idUsuario)
//         .then(function (resultado) {
//             res.status(200).json(resultado);
//         })
//         .catch(function (erro) {
//             res.status(500).json(erro.sqlMessage);
//         });
// }


module.exports = {
    cadastrar,
    // listar
};