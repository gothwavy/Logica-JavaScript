// Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.

let A = parseInt(prompt('Digite o valor de A:'));
let B = parseInt(prompt('Digite o valor de B:'));
let resultado

if (A > B){
  resultado = A - B;
} else {
  resultado = B - A;
}

resultado = resultado ** 2;

console.log(`O valor final -> ${resultado}`);
