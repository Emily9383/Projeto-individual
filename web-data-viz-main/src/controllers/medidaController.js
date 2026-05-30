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
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var idUsuario = req.body.idUsuarioServer;
    var personagem = req.body.PersonagemServer;
    
    // Faça as validações dos valores
    if (idUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        console.log(idUsuario,personagem)
    
    medidaModel.buscarTotalQuizzes(idUsuario, personagem)
        .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                });
    }
}

module.exports = {
    buscarVotosGlobais,
    buscarTotalQuizzes
};