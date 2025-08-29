// 1 - Gasolina com dois dígitos
const valorDigitado = prompt("Qual o preco da gasolina? R$ ");
alert(parseFloat(valorDigitado));

// 2 - Sem moedas
const valorDoProduto = prompt("Qual o valor do produto? R$ ");
alert("Você pode pagar: R$ " + Math.round(valorDoProduto));

// 3 - A primeira letra
const nomeCandidato = prompt("Qual o nome do candidato? ");
const nomeMaiusculo = nomeCandidato.toUpperCase();
if (nomeMaiusculo.substring(0, 1) == "A" || nomeMaiusculo.substring(0, 1) == "E" || nomeMaiusculo.substring(0, 1) == "I" || nomeMaiusculo.substring(0, 1) == "O" || nomeMaiusculo.substring(0, 1) == "U") {
    alert("O candidato(a) " + nomeCandidato + " será entrevistado(a) na segunda-feira!")
} else {
    alert("O candidato(a) " + nomeCandidato + " será entrevistado(a) na terça-feira!");
}