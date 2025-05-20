var express = require("express");
var router = express.Router();
var viagemController = require("../controllers/viagemController");

router.post("/cadastrar", viagemController.cadastrar);

module.exports = router;
