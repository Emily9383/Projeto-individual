var database = require("../database/config");

// Função para buscar os dados que vão preencher o Gráfico de Barras (Personagens mais populares)
function buscarVotosGlobais() {

    // Query baseada no seu SELECT GROUP BY que conta os votos por personagem
    var instrucaoSql = `
        select personagem , count(*) as personagem_id,
(select count(*)
from quiz) as total_quiz
from quiz
group by personagem;
    `;

    console.log("Executando a instrução SQL (Votos Globais): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função em tempo real / contagem rápida para atualizar o totalizador de Quizzes (KPI/Card)
function buscarTotalQuizzes(idUsuario, personagem){

    // Query baseada no seu SELECT COUNT(*) que traz o total geral de quizzes realizados
    var instrucaoSql = `
        insert into quiz (personagem, fkusuario) values
        ('${personagem}', '${idUsuario}');`;
    

    console.log("Executando a instrução SQL (Total de Quizzes): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarVotosGlobais,
    buscarTotalQuizzes
};
