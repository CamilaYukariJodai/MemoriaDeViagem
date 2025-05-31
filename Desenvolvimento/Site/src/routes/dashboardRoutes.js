var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/categoria-mais/:idUsuario", dashboardController.categoriaMais);
router.get("/media-duracao", dashboardController.mediaDuracao);
router.get("/total-usuario/:idUsuario", dashboardController.totalUsuario);
router.get("/companhias-geral", dashboardController.companhiasGeral);

module.exports = router;