//Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. 

let primeiroValor = parseInt(prompt(`Digite o primeiro valor:`));
let segundoValor = parseInt(prompt(`Digite o segundo valor:`));
let terceiroValor = parseInt(prompt(`Digite o terceiro valor:`));

if (primeiroValor == segundoValor || segundoValor == terceiroValor || terceiroValor == primeiroValor) {
  console.log(`Nao serao considerados valores iguais!`);
} else if (primeiroValor < segundoValor) {
  if (segundoValor < terceiroValor) {
    console.log(`Valores crescente -> ${primeiroValor} > ${segundoValor} > ${terceiroValor}`);
  } else {
    console.log(`Valores crescente -> ${primeiroValor} > ${terceiroValor} > ${segundoValor}`);
  }
} else if (segundoValor < terceiroValor) {
  if (primeiroValor < terceiroValor) {
    console.log(`Valores crescente -> ${segundoValor} > ${primeiroValor} > ${terceiroValor}`);
  } else {
    console.log(`Valores crescente -> ${segundoValor} > ${terceiroValor} > ${primeiroValor}`);
  }
} else if (terceiroValor < primeiroValor) {
  if (primeiroValor < segundoValor) {
    console.log(`Valores crescente -> ${terceiroValor} > ${primeiroValor} > ${segundoValor}`);
  } else {
    console.log(`Valores crescente -> ${terceiroValor} > ${segundoValor} > ${primeiroValor}`);
  }
}