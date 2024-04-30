// Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.

let numero, somaNumeros = 0, contadora = 50, mediaNumeros = 0;

while (contadora <= 70) {
  if (contadora % 2 == 0) {
    somaNumeros = somaNumeros + contadora;
    mediaNumeros++
  }
  contadora++;
}

mediaNumeros = somaNumeros / mediaNumeros;

console.log(`A soma dos valores e: ${somaNumeros}`);
console.log(`A media da soma dos valores e: ${mediaNumeros}`);