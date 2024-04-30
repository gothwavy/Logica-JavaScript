// Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

let primeiroTime = prompt(`Digite o nome do primeiro time:`);
let primeiroGols = parseInt(prompt(`Digite quantos gols o time ${primeiroTime} fez:`));
let segundoTime = prompt(`Digite o nome do segundo time:`);
let segundoGols = parseInt(prompt(`Digite quantos gols o time ${segundoTime} fez:`));

if (primeiroGols > segundoGols) {
  console.log(`${primeiroTime} vencedor!`);
} else if (segundoGols > primeiroGols) {
  console.log(`${segundoTime} vencedor!`);
} else {
  console.log(`Empate!`);
}