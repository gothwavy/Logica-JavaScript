// Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente.

let condicaoEnquanto = 0, valorExpoente = 4, valorBase = 10, valorFinal = 1;

while (condicaoEnquanto < valorExpoente) {
  valorFinal = valorFinal * valorBase;
  condicaoEnquanto++;
}

console.log(valorFinal);