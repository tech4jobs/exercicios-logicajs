// 1 - Limite de pessoas na sala
const limiteSala = parseInt(prompt("Qual o limite da sala? "));
const participantes = parseInt(prompt("Quantas pessoas estão na sala? "));

if (participantes > limiteSala) {
    alert("O limite de pessoas na sala foi atingido!");
} else {
    alert("Ainda há vagas na sala.");
}

// 2 - Atividade ao ar livre
const temperatura = prompt("Qual a temperatura atual em °C? ");
const estaChovendo = prompt("Está chovendo (S/N)? ");

if (parseInt(temperatura) < 32 && estaChovendo == "N") {
    alert("O clima está ideal para as atividades ao ar livre!");
} else {
    alert("O clima não está adequado para as atividades ao ar livre");
}

// 3 - Moro na capital
const siglaUF = prompt("Qual a sigla UF? ");
switch (siglaUF) {
    case "rj":
    case "RJ":
        alert("Rio de Janeiro");
        break;
    case "sp":
    case "SP":
        alert("São Paulo");
        break;
    case "mg":
    case "MG":
        alert("Minas Gerais");
        break;
    case "es":
    case "ES":
        alert("Espírito Santo")
        break;
    default:
        alert('Não é um estado do sudeste brasileiro!');
        break;
}