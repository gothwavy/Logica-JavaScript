// Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));

if (A > B + C) {
  console.log(`Os valores nao podem formar um triangulo!`);
} else if (B > C + A) {
  console.log(`Os valores nao podem formar um triangulo!`);
} else if (C > A + B) {
  console.log(`Os valores nao podem formar um triangulo!`);
} else {
  console.log(`Os valores podem formar um triangulo!`);
}