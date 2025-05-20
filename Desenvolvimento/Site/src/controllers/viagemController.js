var viagemModel = require("../models/viagemModel");

function cadastrar(req, res) {
  var destino = req.body.destinoServer;
  var dtViagem = req.body.dtViagemServer;
  var duracao = req.body.duracaoServer;
  var companhia = req.body.companhiaServer;
  var categoria = req.body.categoriaServer;
  var comentario = req.body.comentarioServer;
  var imagem = req.body.imagemServer; // pode ser nome do arquivo ou caminho

  if (destino == undefined) {
    res.status(400).send("Destino está undefined!");
  } else if (dtViagem == undefined) {
    res.status(400).send("Data da viagem está undefined!");
  } else if (duracao == undefined) {
    res.status(400).send("Duração está undefined!");
  } else if (companhia == undefined) {
    res.status(400).send("Companhia está undefined!");
  } else if (categoria == undefined) {
    res.status(400).send("Categoria está undefined!");
  } else if (comentario == undefined) {
    res.status(400).send("Comentário está undefined!");
  } else if (imagem == undefined) {
    res.status(400).send("Imagem está undefined!");
  } else {
    try {
      var resultado = viagemModel.cadastrar(destino, dtViagem, duracao, companhia, categoria, comentario, imagem);
      res.json(resultado);
    } catch (erro) {
      console.log("\nErro ao cadastrar viagem! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    }
  }
}

module.exports = {
  cadastrar,
};
