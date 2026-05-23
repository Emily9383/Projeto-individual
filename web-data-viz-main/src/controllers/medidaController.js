var medidaModel = require("../models/medidaModel");

function buscarVotosGlobais(req, res) {
    console.log(`[Controller] Recuperando os votos globais do quiz para o gráfico de Stardew Valley`);

    medidaModel.buscarVotosGlobais()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum voto encontrado no banco!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os votos globais.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function buscarTotalQuizzes(req, res) {
    console.log(`[Controller] Recuperando a contagem total geral de quizzes realizados`);

    medidaModel.buscarTotalQuizzes()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum quiz registrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar o total de quizzes.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}
module.exports = {
    buscarVotosGlobais,
    buscarTotalQuizzes
};