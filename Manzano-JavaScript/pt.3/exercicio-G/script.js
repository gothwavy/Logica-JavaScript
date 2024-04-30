// Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));
let D = parseInt(prompt(`Digite o valor de D:`));

if (A % 2 == 0 && A % 3 == 0) {
  console.log(`${A} é divisível por 2 e 3`);
}
if (B % 2 == 0 && B % 3 == 0) {
  console.log(`${B} é divisível por 2 e 3`);
}
if (C % 2 == 0 && C % 3 == 0) {
  console.log(`${C} é divisível por 2 e 3`);
}
if (D % 2 == 0 && D % 3 == 0) {
  console.log(`${D} é divisível por 2 e 3`);
}