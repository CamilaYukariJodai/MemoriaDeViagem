var usuarioModel = require("../models/usuariosModel");

function autenticar(req, res) {
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel.autenticar(email, senha)
      .then(function (resultado) {
        if (resultado.length == 1) {
          res.json({
            idUsuario: resultado[0].idUsuario,
            nome: resultado[0].nome,
            email: resultado[0].email
          });
        } else if (resultado.length == 0) {
          res.status(403).send("Email e/ou senha inválidos");
        } else {
          // este ELSE nunca deveria acontecer com LIMIT 1
          console.warn("ALERTA: SELECT retornou múltiplos registros mesmo com LIMIT 1");
          res.status(500).send("Erro inesperado: múltiplos usuários encontrados.");
        }
      })
      .catch(function (erro) {
        console.log("ERRO NO LOGIN:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}


function cadastrar(req, res) {
  var nome = req.body.nomeServer;
  var email = req.body.emailServer;
  var senha = req.body.senhaServer;

  if (nome == undefined) {
    res.status(400).send("Seu nome está undefined!");
  } else if (email == undefined) {
    res.status(400).send("Seu email está undefined!");
  } else if (senha == undefined) {
    res.status(400).send("Sua senha está undefined!");
  } else {
    usuarioModel.cadastrar(nome, email, senha)
      .then((resultado) => {
        res.json(resultado);
      })
      .catch((erro) => {
        console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }
}


module.exports = {
  autenticar,
  cadastrar,
};
