// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

let primeiroValor = parseInt(prompt(`Digite um valor:`));
let segundoValor = parseInt(prompt(`Digite outro valor:`));

if (primeiroValor > segundoValor) {
  console.log(`${segundoValor}, ${primeiroValor}`);
} else if (segundoValor > primeiroValor) {
  console.log(`${primeiroValor}, ${segundoValor}`);
} else {
  console.log(`Os valores nao podem ser iguais!`);
}