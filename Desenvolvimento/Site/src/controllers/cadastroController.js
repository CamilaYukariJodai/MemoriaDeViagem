var cadastroModel = require("../models/cadastroModel");

function salvar(req, res) {
  const imagem = req.file.filename;

  const {nome, email} = req.body

  const usuario = { nome, email, senha, id_usuario, destino, dtViagem, companhia, categoria, comentario, imagem }
  
  cadastroModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarUsuarioPeloId(req, res) {
  console.log(req.params.id);
  cadastroModel.buscarUsuarioPeloId(req.params.id)
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvar, buscarUsuarioPeloId }