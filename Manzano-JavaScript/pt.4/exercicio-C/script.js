// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 
// 1 até 500. 

let condicaoEnquanto = 1, somaNumeros = 0;

while (condicaoEnquanto <= 500) {
  if (condicaoEnquanto % 2 == 0) {
    somaNumeros = somaNumeros + condicaoEnquanto;
  }
  condicaoEnquanto++;
}

console.log(`A soma dos numeros pares -> ${somaNumeros}`);