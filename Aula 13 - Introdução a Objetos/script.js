// 1 - Sistema de notas escolares
class Aluno {
  constructor(nome, modulo, nota_4, nota_6) {
    this.nome = nome;
    this.modulo = modulo;
    this.nota_4 = nota_4;
    this.nota_6 = nota_6;
  }

  calcularMedia() {
    let media = (this.nota_4 + this.nota_6) / 2;
    if (media >= 6) {
      return `${this.nome}: Aprovado`;
    } else {
      return `${this.nome}: Reprovado`;
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

alunos.forEach((aluno) => {
  alert(aluno.calcularMedia());
});