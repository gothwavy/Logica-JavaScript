// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 

let primeiroValor = parseInt(prompt(`Digite um valor:`));
let segundoValor = parseInt(prompt(`Digite outro valor:`));

if (primeiroValor > segundoValor) {
  console.log(`${primeiroValor}`);
} else if (segundoValor > primeiroValor) {
  console.log(`${segundoValor}`);
} else {
  console.log(`Os valores nao podem ser iguais!`);
}