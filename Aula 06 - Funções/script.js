const readline = require("readline-sync");

// 1 - Gasolina com dois dígitos
const valorDigitado = readline.question("Qual o preco da gasolina? R$ ");
console.log(parseFloat(valorDigitado));

// 2 - Sem moedas
const valorDoProduto = readline.question("Qual o valor do produto? R$ ");
console.log("Você pode pagar: R$ " + Math.round(valorDoProduto));

// 3 - A primeira letra
const nomeCandidato = readline.question("Qual o nome do candidato? ");
const nomeMaiusculo = nomeCandidato.toUpperCase();
if (nomeMaiusculo.substring(0, 1) == "A" || nomeMaiusculo.substring(0, 1) == "E" || nomeMaiusculo.substring(0, 1) == "I" || nomeMaiusculo.substring(0, 1) == "O" || nomeMaiusculo.substring(0, 1) == "U") {
    console.log("O candidato(a) " + nomeCandidato + " será entrevistado(a) na segunda-feira!")
} else {
    console.log("O candidato(a) " + nomeCandidato + " será entrevistado(a) na terça-feira!");
}