var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/votos-quiz", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real-quiz", function (req, res) {
    medidaController.buscarTotalQuizzes(req, res);
})

module.exports = router;