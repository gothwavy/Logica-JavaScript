// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. 

let primeiroValor = parseInt(prompt(`Digite o primeiro valor:`));
let segundoValor = parseInt(prompt(`Digite o segundo valor:`));
let terceiroValor = parseInt(prompt(`Digite o terceiro valor:`));
let somaMaiores;

if (primeiroValor == segundoValor || segundoValor == terceiroValor || terceiroValor == primeiroValor) {
  console.log(`Nao serao considerados valores iguais!`);
} else if (primeiroValor > segundoValor) {
  if (segundoValor > terceiroValor) {
    somaMaiores = primeiroValor + segundoValor;
  } else {
    somaMaiores = primeiroValor + terceiroValor;
  }
} else if (segundoValor > terceiroValor) {
  if (primeiroValor > terceiroValor) {
    somaMaiores = segundoValor + primeiroValor;
  } else {
    somaMaiores = segundoValor + terceiroValor;
  }
} else if (terceiroValor > primeiroValor) {
  if (primeiroValor > segundoValor) {
    somaMaiores = terceiroValor + primeiroValor;
  } else {
    somaMaiores = terceiroValor + segundoValor;
  }
}

console.log(`A soma dos maiores valores -> ${somaMaiores}`);