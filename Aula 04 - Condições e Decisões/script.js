const readline = require("readline-sync")

// 1 - Login e senha
const senhaSecreta = "abc123";
let senhaDigitada = readline.question("Digite a senha secreta: ");

console.log("Está correta? " + (senhaDigitada === senhaSecreta));

// 2 - Maioria da turma está presente
const totalAlunos = readline.question("Quantos alunos tem na turma? ");
let alunosPresentesHoje = readline.question("Quantos alunos responderam a chamada? ");

console.log("A maioria da turma respondeu a chamada? " + (alunosPresentesHoje > totalAlunos/2));

// 3 - Ainda é boa tarde
const horaAtual = readline.question("Digite a hora atual: ");
console.log("Posso desejar boa tarde? " + (horaAtual <= 17 && horaAtual >= 12));

// 4 - Voto facultativo
const idade = readline.question("Digite a sua idade: ");
console.log("Seu voto é facultativo? " + (idade < 18 || idade > 70));

// 5 - Cidadão emancipado
const sexo = readline.question("Qual o seu sexo (Masculino/Feminino)? ");
const idade2 = readline.question("Qual a sua idade? ");
console.log("Você pode ser emancipado? " + ((sexo == "Masculino" && idade2 >= 18) || (sexo == "Feminino" && idade2 >= 21)));