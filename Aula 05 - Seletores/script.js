const readline = require("readline-sync");

// 1 - Limite de pessoas na sala
const limiteSala = parseInt(readline.question("Qual o limite da sala? "));
const participantes = parseInt(readline.question("Quantas pessoas estão na sala? "));

if (participantes > limiteSala) {
    console.log("O limite de pessoas na sala foi atingido!");
} else {
    console.log("Ainda há vagas na sala.");
}

// 2 - Atividade ao ar livre
const temperatura = readline.question("Qual a temperatura atual em °C? ");
const estaChovendo = readline.question("Está chovendo (S/N)? ");

if (parseInt(temperatura) < 32 && estaChovendo == "N") {
    console.log("O clima está ideal para as atividades ao ar livre!");
} else {
    console.log("O clima não está adequado para as atividades ao ar livre");
}

// 3 - Moro na capital
const siglaUF = readline.question("Qual a sigla UF? ");
switch (siglaUF) {
    case "rj":
    case "RJ":
        console.log("Rio de Janeiro");
        break;
    case "sp":
    case "SP":
        console.log("São Paulo");
        break;
    case "mg":
    case "MG":
        console.log("Minas Gerais");
        break;
    case "es":
    case "ES":
        console.log("Espírito Santo")
        break;
    default:
        console.log('Não é um estado do sudeste brasileiro!');
        break;
}