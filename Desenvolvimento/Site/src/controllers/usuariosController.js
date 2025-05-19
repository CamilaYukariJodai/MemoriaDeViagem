const usuarioModel = require("../models/usuariosModel");

function cadastrar(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos" });
  }

  usuarioModel.inserir(nome, email, senha, (err, resultado) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err);
      return res.status(500).json({ erro: "Erro ao cadastrar usuário" });
    }

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  });
}

module.exports = { cadastrar };
