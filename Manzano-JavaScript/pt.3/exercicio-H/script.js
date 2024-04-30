// Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));
let D = parseInt(prompt(`Digite o valor de D:`));
let E = parseInt(prompt(`Digite o valor de E:`));

let maior = A;
let menor = A;

if (B > maior) {
  maior = B;
} else if (B < menor) {
  menor = B;
}
if (C > maior) {
  maior = C;
} else if (C < menor) {
  menor = C;
}
if (D > maior) {
  maior = D;
} else if (D < menor) {
  menor = D;
}
if (E > maior) {
  maior = E;
} else if (E < menor) {
  menor = E;
}

console.log(`O maior valor e: ${maior}`);
console.log(`O menor valor e: ${menor}`);
