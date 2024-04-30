// Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação. Use a media de aproveitamento.
// > = 9,0 -> A 
// > = 7,5 e < 9,0 -> B 
// > = 6,0 e < 7,5 -> C 
// < 6,0 -> D

let primeiraNota = parseFloat(prompt(`Digite a primeira nota:`));
let segundaNota = parseFloat(prompt(`Digite a segunda nota:`));
let terceiraNota = parseFloat(prompt(`Digite a terceira nota:`));

let mediaNota = (primeiraNota + segundaNota + terceiraNota) / 3;
let mediaAproveitamento = (primeiraNota + segundaNota * 2 + terceiraNota * 3 + mediaNota) / 7;

if (mediaAproveitamento >= 9) {
  console.log(`O conceito do aluno -> A`);
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9) {
  console.log(`O conceito do aluno -> B`);
} else if (mediaAproveitamento >= 6 && mediaAproveitamento < 7.5) {
  console.log(`O conceito do aluno -> C`);
} else if (mediaAproveitamento < 6) {
  console.log(`O conceito do aluno -> D`);
}