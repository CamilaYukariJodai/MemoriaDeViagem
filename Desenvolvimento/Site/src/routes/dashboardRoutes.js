var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/total-viagens", dashboardController.totalViagens);
router.get("/destino-mais-visitado", dashboardController.destinoMaisVisitado);
router.get("/media-duracao", dashboardController.mediaDuracao);
router.get("/total-usuarios", dashboardController.totalUsuarios);
router.get("/companhias/:idUsuario", dashboardController.graficoCompanhia);
router.get("/companhias-geral", dashboardController.graficoCompanhiaGeral);
router.get("/ultimas-viagens/:idUsuario", dashboardController.ultimasViagens);
router.get("/categoria-mais/:idUsuario", dashboardController.categoriaMaisVisitada);
router.get("/total-usuario/:idUsuario", dashboardController.totalViagensUsuario);

module.exports = router;