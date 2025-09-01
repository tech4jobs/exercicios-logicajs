// 1 - Notas escolares em lista
class Aluno {
  mediaFinal;

  constructor(nome, modulo, nota_4, nota_6) {
    this.nome = nome;
    this.modulo = modulo;
    this.nota_4 = nota_4;
    this.nota_6 = nota_6;
    this.mediaFinal = (this.nota_4 + this.nota_6) / 2;
  }

  calcularMedia() {
    if (this.mediaFinal >= 6) {
      return `Aprovado`;
    } else {
      return `Reprovado`;
    }
  }
}

const alunos = [
  new Aluno("Rafael", "Lógica de Programação", 10, 6.7),
  new Aluno("Bruno", "JavaScript Avançado", 8.7, 4.7),
  new Aluno("João Pedro", "React", 3.4, 5.7),
  new Aluno("Matheus", "HTML", 10, 10),
  new Aluno("Luiz Henrique", "React", 10, 9.7),
];

function exibirRelatorio() {
  let relatorio = "Relatório de alunos\n";
  alunos.forEach((aluno) => {
    relatorio += `Aluno: ${aluno.nome}: - Nota 1: ${aluno.nota_4} - Nota 2: ${
      aluno.nota_6
    } | ${aluno.calcularMedia()}\n`;
  });

  alert(relatorio);
}

const alunoMaiorNota = alunos.sort((a, b) => b - a)[0];

exibirRelatorio();
alert(
  "Aluno com a maior média: " +
    alunoMaiorNota.nome +
    " - Média: " +
    alunoMaiorNota.mediaFinal.toFixed(1)
);

let alunosAbaixoDeSete = 0;
alunos.forEach((aluno) => {
  if (aluno.mediaFinal < 7) {
    alunosAbaixoDeSete++;
  }
});
alert("Alunos com a média abaixo de 7: " + alunosAbaixoDeSete);
