const express = require("express");
const router = express.Router();
const upload = require('../config/configUpload');
const cadastroController = require("../controllers/cadastroController");

router.get("", (req, res) => {
  res.render("index")
});

router.post('/cadastro', upload.single('foto'), (req, res) => {
  cadastroController.salvar(req, res);
});

router.get('/:id', upload.single('foto'), (req, res) => {
  cadastroController.buscarUsuarioPeloId(req, res);
});

module.exports = router;