var express = require("express");
var router = express.Router();
var viagemController = require("../controllers/viagensController");
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
    viagemController.cadastrar(req, res);
});

module.exports = router;
