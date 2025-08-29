// 1 - Fazendo a chamada com arrays
const alunos = [];
let aluno = prompt("Digite o nome do aluno: ");
do {
  alunos.push(aluno);
  aluno = prompt("Digite o nome do aluno: ");
} while (aluno != "");

alert(alunos);

// 2 - Notas de provas 
const notas = [];
for (i = 0; i < 5; i++) {
    notas.push(parseFloat(prompt("Digite a nota: ")));
}

function calcularMedia(notas) {
    let totalNotas = 0;
    for (i = 0; i < notas.length; i++) {
        totalNotas += notas[i];
    }
    alert(notas.length)
    return totalNotas/notas.length;
}

alert("Média das notas: " + calcularMedia(notas));

// 3 - Procurando um item na lista
const frutas = ["Manga", "Maçã", "Melancia", "Melão", "Kiwi"];
const posicao = parseInt(prompt("Você quer descobrir a fruta que está em qual posição?"))
let frutaAchada = frutas[posicao];
if (frutaAchada == undefined) {
    alert("Posição não encontrada!")
} else {
    alert(frutaAchada);
}