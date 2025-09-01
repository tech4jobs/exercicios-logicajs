// 1 - Saldo na conta corrente
const clientes = ["Rafaela", "Matheus", "João Miguel", "Daniela", "Maria", "Pedro"]
const valorSaldo = [190.40, 200.30, -10.89, 200.40, 0.00, 450.67]

const nomeDigitado = prompt("Digite o nome do cliente");

function buscarSaldo(nomeDigitado) {
    const nomeMinusculo = nomeDigitado.toLowerCase();

    const indice = clientes.findIndex(
        cliente => cliente.toLocaleLowerCase() === nomeMinusculo
    );

    if (indice != -1) {
        alert("Cliente: " + clientes[indice] + " | Saldo: R$  " + valorSaldo[indice].toFixed(2));
    } else {
        alert("Cliente não encontrado")
    }
}

buscarSaldo(nomeDigitado);

// 2 - Ranking de notas de provas
const notas = [9.8, 10, 4.5, 3.6, 7.9, 8.3];
alert(notas.sort((a, b) => b - a));