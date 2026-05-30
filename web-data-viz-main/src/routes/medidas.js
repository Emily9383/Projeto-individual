var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarVotosGlobais", function (req, res) {
    medidaController.buscarVotosGlobais(req, res);
});

router.post("/buscarTotalQuizzes", function (req, res) {
    medidaController.buscarTotalQuizzes(req, res);
})

module.exports = router;