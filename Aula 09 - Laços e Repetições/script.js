// 1 - Aguardando a resposta certa
function aguardandoResposta() {
  let resposta;
  while (resposta != "Tech4FM é show!") {
    resposta = prompt("Atendeu o telefone!");
  }
  alert("Parabéns! Você ganhou uma camiseta!");
}

aguardandoResposta();

// 2- Aguardando a resposta do ouvinte
function aguardandoRespostaDoOuvinte() {
  let resposta;
  do {
    resposta = prompt("Atendeu o telefone!");
  } while (resposta != "Tech4FM é show!");

  alert("Parabéns! Você ganhou uma camiseta!");
}

aguardandoRespostaDoOuvinte();

// 3 - Contando até 10
function contandoAteDez() {
  let i = 1;
  do {
    alert(i);
    i = i + 1;
  } while (i <= 10);
}

contandoAteDez();

// 4 - Somando as apostas
function somandoAsApostas() {
  let amigo = 1;
  let totalAposta = 0;
  do {
    totalAposta =
      totalAposta +
      parseFloat(prompt("Qual o valor da aposta do " + amigo + "° amigo? "));
    amigo = amigo + 1;
  } while (amigo <= 4);
  alert("O valor total das apostas dos quatro amigos é R$ " + totalAposta);
}

somandoAsApostas();

// 5 - Incrementando as apostas
function somandoAsApostasComIncremento() {
  let amigo = 1;
  let totalAposta = 0;
  do {
    totalAposta += parseFloat(
      prompt("Qual o valor da aposta do " + amigo + "° amigo? ")
    );
    amigo++;
  } while (amigo <= 4);
  alert("O valor total das apostas dos quatro amigos é R$ " + totalAposta);
}

somandoAsApostasComIncremento();

// 6 - Fazendo a chamada
function fazendoAChamadaV1() {
  let nomeAluno = prompt("Digite o nome do aluno: ");
  let alunos = nomeAluno;
  while (nomeAluno != "") {
    nomeAluno = prompt("Digite o nome do aluno: ");
    alunos += " " + nomeAluno;
  }
  alert(alunos);
}

fazendoAChamadaV1();

function fazendoAChamadaV2() {
  let nomeAluno = prompt("Digite o nome do aluno: ");
  let alunos = nomeAluno;
  do {
    nomeAluno = prompt("Digite o nome do aluno: ");
    alunos += " " + nomeAluno;
  } while (nomeAluno != "");
  alert(alunos);
}

fazendoAChamadaV2();
