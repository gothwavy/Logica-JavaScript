// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

let contadora = 1, somaNumeros = 0;

do {
  if (contadora % 2 == 0) {
    somaNumeros += contadora;
  }
  contadora++;
} while (contadora <= 500);

console.log(somaNumeros);