var database = require("../database/config");

// Função para buscar os dados que vão preencher o Gráfico de Barras (Personagens mais populares)
function buscarVotosGlobais() {

    // Query baseada no seu SELECT GROUP BY que conta os votos por personagem
    var instrucaoSql = `
        SELECT 
            personagem, 
            COUNT(*) AS votos
        FROM quiz
        GROUP BY personagem
        ORDER BY votos DESC;
    `;

    console.log("Executando a instrução SQL (Votos Globais): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Função em tempo real / contagem rápida para atualizar o totalizador de Quizzes (KPI/Card)
function buscarTotalQuizzes() {

    // Query baseada no seu SELECT COUNT(*) que traz o total geral de quizzes realizados
    var instrucaoSql = `
        SELECT 
            COUNT(*) AS total_quiz 
        FROM quiz;
    `;

    console.log("Executando a instrução SQL (Total de Quizzes): \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarVotosGlobais,
    buscarTotalQuizzes
};
