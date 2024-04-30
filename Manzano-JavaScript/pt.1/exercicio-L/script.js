// Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));

let somaQuadrado = A ** 2 + B ** 2 + C ** 2;

console.log(`A soma dos quadrados desses valores -> ${somaQuadrado}`);