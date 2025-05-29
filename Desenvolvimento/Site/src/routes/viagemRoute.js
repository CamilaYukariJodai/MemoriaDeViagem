var express = require("express");
var router = express.Router();
var viagensController = require("../controllers/viagensController");
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

var upload = multer({ storage: storage });

router.post("/cadastrar", upload.single("fotoViagem"), function (req, res) {
    viagensController.cadastrar(req, res);
});

router.post("/associar-viagem/:idUsuario/:idViagem", function (req, res) {
    console.log(req.params);

    viagensController.registrarUsuarioViagem(req, res);
});

router.get("/buscar-viagens", function (req, res) {
    viagensController.buscarViagens(req, res);
})

router.get("/imagens/:idUsuario/:idViagem", function (req, res) {
    viagensController.retornarImagens(req, res);
})

// router.get("/listar/:idUsuario", viagensController.listar);

module.exports = router;
