// Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais novo com a mulher mais velha.

let primeiraMulher = parseInt(prompt(`Digite a idade da primeira mulher:`));
let segundaMulher = parseInt(prompt(`Digite a idade da segunda mulher:`));
let primeiroHomem = parseInt(prompt(`Digite a idade do primeiro homem:`));
let segundoHomem = parseInt(prompt(`Digite a idade do segundo homem:`));

let somaIdades, produtoIdades;

if (primeiraMulher > segundaMulher) {
  if (primeiroHomem > segundoHomem) {
    somaIdades = primeiroHomem + segundaMulher;
    produtoIdades = segundoHomem * primeiraMulher;
  } else {
    somaIdades = segundoHomem + segundaMulher;
    produtoIdades = primeiroHomem * primeiraMulher;
  }
} else if (segundaMulher > primeiraMulher) {
  if (primeiroHomem > segundoHomem) {
    somaIdades = primeiroHomem + primeiraMulher;
    produtoIdades = segundoHomem * segundaMulher;
  } else {
    somaIdades = segundoHomem + primeiraMulher;
    produtoIdades = primeiroHomem * segundaMulher;
  }
}

console.log(`A soma das idades entre o homem mais velho e mulher mais nova = ${somaIdades}`);
console.log(`O produto das idades entre a mulher mais velha e o homem mais novo = ${produtoIdades}`);