// Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido. 

let contadora = 1, numero, valorFatorial = 1, somaFatorial = 0;

do {
  numero = parseInt(prompt(`Digite um numero:`));
  
  do {
    valorFatorial *= numero;
    numero--;
  } while (numero > 1);

  somaFatorial += valorFatorial;
  valorFatorial = 1;

  contadora++;
} while (contadora <= 15);

console.log(`O total da soma entre os fatoriais -> ${somaFatorial}`);