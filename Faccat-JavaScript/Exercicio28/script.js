// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let primeroValor = parseInt(prompt(`Digite o primeiro valor:`));
let segundoValor = parseInt(prompt(`Digite o segundo valor:`));
let terceiroValor = parseInt(prompt(`Digite o terceiro valor:`));

if (primeroValor == segundoValor || segundoValor == terceiroValor || terceiroValor == primeroValor) {
  console.log(`Nao serao considerados valores iguais!`);
} else if (primeroValor > segundoValor && primeroValor > terceiroValor) {
  console.log(`O maior valor e ${primeroValor}`);
} else if (segundoValor > primeroValor && segundoValor > terceiroValor) {
  console.log(`O maior valor e ${segundoValor}`);
} else if (terceiroValor > primeroValor && terceiroValor > segundoValor) {
  console.log(`O maior valor e ${terceiroValor}`);
}