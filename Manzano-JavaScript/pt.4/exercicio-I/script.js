// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.

let numero, somaNumeros = 0, contadora = 0;

while (contadora < 10){
  numero = parseInt(prompt(`Digite ${contadora+1}º valor:`));
  somaNumeros = somaNumeros + numero;
  contadora++;
}

let mediaNumeros = somaNumeros / contadora;

console.log(`A soma dos valores e: ${somaNumeros}`);
console.log(`A media da soma dos valores e: ${mediaNumeros}`);