var cadastroModel = require("../models/cadastroModel");

function cadastrar(req, res) {
  var { nome, email, senha, destino, dtViagem, companhia } = req.body;
  var foto = req.file.filename;

  cadastroModel.inserirUsuario(nome, email, senha, (err, resultadoUsuario) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }

    var idUsuario = resultadoUsuario.insertId;

    cadastroModel.inserirViagem(idUsuario, destino, dtViagem, companhia, foto, (err2) => {
      if (err2) {
        console.error("Erro ao inserir viagem:", err2);
        return res.status(500).json({ erro: "Erro ao cadastrar viagem" });
      }

      res.status(201).json({ mensagem: "Cadastro realizado com sucesso!" });
    });
  });
}

module.exports = {
  cadastrar
};
