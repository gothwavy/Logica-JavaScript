// Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D,devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.

let A = parseFloat(prompt(`Digite o valor de A:`));
let B = parseFloat(prompt(`Digite o valor de B:`));
let C = parseFloat(prompt(`Digite o valor de C:`));
let D = parseFloat(prompt(`Digite o valor de D:`));

console.log(A + B);
console.log(A + C);
console.log(A + D);
console.log(B + C);
console.log(B + D);
console.log(C + D);
console.log(A * B);
console.log(A * C);
console.log(A * D);
console.log(B * C);
console.log(B * D);
console.log(C * D);