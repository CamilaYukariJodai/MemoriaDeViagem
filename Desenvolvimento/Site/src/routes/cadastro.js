const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const mysql = require("mysql2");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const nomeUnico = Date.now() + "-" + file.originalname;
    cb(null, nomeUnico);
  }
});

const upload = multer({ storage: storage });


const conexao = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});


router.post("/", upload.single("foto"), (req, res) => {
  const { nome, email, senha, destino, dtViagem, companhia, categoria, comentario } = req.body;
  const foto = req.file ? req.file.filename : null;

  const sqlUsuario = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

  conexao.query(sqlUsuario, [nome, email, senha], (err, resultadoUsuario) => {
    if (err) {
      console.error("Erro ao cadastrar usuário:", err);
      return res.status(500).send("Erro ao cadastrar usuário.");
    }

    const idUsuario = resultadoUsuario.insertId;

    const sqlViagem = "INSERT INTO viagens (idUsuario, destino, dtViagem, companhia, categoria, comentario, imagem) VALUES (?, ?, ?, ?, ?)";

    conexao.query(sqlViagem, [idUsuario, destino, dtViagem, companhia, categoria, comentario, imagem], (err2) => {
      if (err2) {
        console.error("Erro ao cadastrar viagem:", err2);
        return res.status(500).send("Erro ao cadastrar viagem.");
      }

      res.status(201).send("Cadastro realizado com sucesso!");
    });
  });
});

module.exports = router;
