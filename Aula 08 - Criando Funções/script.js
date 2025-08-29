// 1 - Gentileza do dia
function gentilezaDoDia() {
    alert("Bom dia!");
    alert("Boa tarde!");
    alert("Boa noite!");
}

gentilezaDoDia();

// 2 - A primeira letra em função
const nomeCandidato = prompt("Qual o nome do candidato? ");
function primeiraLetra(nomeCandidato) {
    alert(nomeCandidato.substring(0, 1).toLowerCase());
}

primeiraLetra(nomeCandidato);

// 3 - Multiplicação Inteira
const numero1 = prompt("Qual o primeiro numero? ");
const numero2 = prompt("Qual o segundo numero? ");
function multiplicacaoInteira(numero1, numero2) {
    return numero1 * numero2;
}

alert(numero1 + " x " + numero2 + " = " + multiplicacaoInteira(numero1, numero2));

// 4 - Comprando ações na Bolsa de valores
const valorDaAcao = prompt("Qual o valor da ação? ");
const quantidadeDeAcoes = prompt("Quantas ações de R$ " + valorDaAcao + " você deseja comprar? ");

function comprarAcoes(valorDaAcao, quantidadeDeAcoes) {
    return "O valor final da compra é R$ " + valorDaAcao * quantidadeDeAcoes;
}

alert(comprarAcoes(valorDaAcao, quantidadeDeAcoes));