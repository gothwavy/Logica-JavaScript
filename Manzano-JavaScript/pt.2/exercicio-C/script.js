// Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores.

let nomeCandidatoA = prompt(`Digite o nome do primeiro candidato:`);
let votosValidosA = parseInt(prompt(`Digite os votos validos para o primeiro candidato:`));
let nomeCandidatoB = prompt(`Digite o nome do segundo candidato:`);
let votosValidosB = parseInt(prompt(`Digite os votos validos para o segundo candidato:`));
let nomeCandidatoC = prompt(`Digite o nome do terceiro candidato:`);
let votosValidosC = parseInt(prompt(`Digite os votos validos para o terceiro candidato:`));

let votosNulos = parseInt(prompt(`Digite o total de votos nulos:`));
let votosBrancos = parseInt(prompt(`Digite o total de votos brancos:`));

const totalVotosValidos = votosValidosA + votosValidosB + votosValidosC + votosNulos + votosBrancos;

const percentualVotosValidos = ((votosValidosA + votosValidosB + votosValidosC) / totalVotosValidos) * 100;
const percentualVotosA = (votosValidosA / totalVotosValidos) * 100;
const percentualVotosB = (votosValidosB / totalVotosValidos) * 100;
const percentualVotosC = (votosValidosC / totalVotosValidos) * 100;
const percentualVotosNulos = (votosNulos / totalVotosValidos) * 100;
const percentualVotosBrancos = (votosBrancos / totalVotosValidos) * 100;

console.log(`Número total de eleitores: ${totalVotosValidos}`);
console.log(`Percentual de votos válidos: ${percentualVotosValidos.toFixed(2)}%`);
console.log(`Percentual de votos válidos do candidato ${nomeCandidatoA}: ${percentualVotosA.toFixed(2)}%`);
console.log(`Percentual de votos válidos do candidato ${nomeCandidatoB}: ${percentualVotosB.toFixed(2)}%`);
console.log(`Percentual de votos válidos do candidato ${nomeCandidatoC}: ${percentualVotosC.toFixed(2)}%`);
console.log(`Percentual de votos nulos: ${percentualVotosNulos.toFixed(2)}%`);
console.log(`Percentual de votos em branco: ${percentualVotosBrancos.toFixed(2)}%`);
