// 1 - Totem de autoatendimento da lanchonete
const sanduiche = prompt("Qual sanduíche você deseja? ")
const acompanhamentos = []
for(i = 0; i < 5; i++) {
    const acompanhamento = prompt("Qual acompanhamento deseja? (Se não quiser, deixe em branco)")
    if (acompanhamento != "") {
        acompanhamentos.push(acompanhamento);
    }
}
const precoTotal = 20.50 + (2 * acompanhamentos.length);
alert("Pedido realizado! Total: R$ " + precoTotal);

// 2 - Os 5 primeiros a comentar
const usuarios = ["Pedro", "Valentina", "Carolina", "Mariana", "João Pedro"];
for (i = 0; i < usuarios.length; i++) {
    alert("Parabéns, " + usuarios[i] + "! Você ganhou um brinde");
}

// 3 - Contagem regressiva de aniversário
for (i = 10; i >= 1; i--) {
    alert(i);
}
alert("Feliz aniversário!");

// 4 - Teste de perguntas rápidas
const resposta = "For"
for (i = 1; i <= 3; i++) {
    const respostaUsuario = prompt("Qual tipo de repetição é usada para repetições definidas?")
    if (respostaUsuario.toUpperCase() == resposta.toUpperCase()) {
        alert("Parabéns, você acertou!");
        break;
    } 
    if (respostaUsuario != resposta && i == 3) {
        alert("Você errou as três tentativas!")
    }
}