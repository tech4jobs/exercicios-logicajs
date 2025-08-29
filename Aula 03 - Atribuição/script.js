// 1 - Atribuindo o retorno de uma função
let nomeVisitante = prompt("Qual o seu nome?")

alert("Olá, " + nomeVisitante + "! Seja bem-vindo(a)!");

// 2 - Trabalhando com constantes
const conteudo = "HTML";
conteudo = "JavaScript";

// 3 - Descobrir os centavos
const valor = 150.35;
const valorEmCentavos = valor * 100;
const centavos = valorEmCentavos % 100;
console.log("O valor em reais é R$ " + valor + "\nOs centavos são: " + centavos);