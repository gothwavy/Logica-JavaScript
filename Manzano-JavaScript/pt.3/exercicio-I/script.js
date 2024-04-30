// Elaborar um programa que efetue a leitura de um número inteiro e apresentar uma mensagem informando se o número é par ou ímpar. 

let numero = parseInt(prompt(`Digite um valor:`));

if (numero % 2 == 0){
  console.log(`Numero par`);
} else if (numero % 2 == 1){
  console.log(`Numero impar`);
}