// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.

let contadora = 1, numero, valorFatorial = 1;

do {
  if (contadora % 2 == 1) {
    numero = contadora;
    do {
      valorFatorial *= numero;
      numero--;
    } while (numero > 1);
    console.log(valorFatorial);
    valorFatorial = 1;
  };
  
  contadora++;
} while (contadora <= 10);