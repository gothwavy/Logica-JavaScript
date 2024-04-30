// Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));
let D = parseInt(prompt(`Digite o valor de D:`));

let produtoValores = A * C;
console.log(`O produto do primeiro e terceiro valor -> ${produtoValores}`);
let somaValores = B + D;
console.log(`A soma do segundo e quarto valor -> ${somaValores}`);


