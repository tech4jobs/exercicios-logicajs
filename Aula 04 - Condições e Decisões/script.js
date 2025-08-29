// 1 - Login e senha
const senhaSecreta = "abc123";
let senhaDigitada = prompt("Digite a senha secreta: ");

alert("Está correta? " + (senhaDigitada === senhaSecreta));

// 2 - Maioria da turma está presente
const totalAlunos = prompt("Quantos alunos tem na turma? ");
let alunosPresentesHoje = prompt("Quantos alunos responderam a chamada? ");

alert("A maioria da turma respondeu a chamada? " + (alunosPresentesHoje > totalAlunos/2));

// 3 - Ainda é boa tarde
const horaAtual = prompt("Digite a hora atual: ");
alert("Posso desejar boa tarde? " + (horaAtual <= 17 && horaAtual >= 12));

// 4 - Voto facultativo
const idade = prompt("Digite a sua idade: ");
alert("Seu voto é facultativo? " + (idade < 18 || idade > 70));

// 5 - Cidadão emancipado
const sexo = prompt("Qual o seu sexo (Masculino/Feminino)? ");
const idade2 = prompt("Qual a sua idade? ");
alert("Você pode ser emancipado? " + ((sexo == "Masculino" && idade2 >= 18) || (sexo == "Feminino" && idade2 >= 21)));