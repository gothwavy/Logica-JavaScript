// Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno. Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5.

let primeiraNota = parseFloat(prompt(`Digite a primeira nota:`));
let segundaNota = parseFloat(prompt(`Digite a segunda nota:`));
let terceiraNota = parseFloat(prompt(`Digite a terceira nota:`));

let mediaPonderadaNotas = (primeiraNota * 2 + segundaNota * 3 + terceiraNota * 5) / 10;

console.log(`A media ponderada das notas -> ${mediaPonderadaNotas}`);
