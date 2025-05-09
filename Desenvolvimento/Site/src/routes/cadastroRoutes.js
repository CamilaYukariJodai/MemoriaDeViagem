var express = require("express");
var router = express.Router();
var cadastroController = require("../controllers/cadastroController");
var multer = require("multer");
var path = require("path");

var storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});

var upload = multer({ storage: storage });

router.post("/", upload.single("foto"), cadastroController.cadastrar);

module.exports = router;
