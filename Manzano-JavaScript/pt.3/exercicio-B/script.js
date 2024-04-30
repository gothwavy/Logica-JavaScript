// Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
// valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido.

let valorInteiro;

valorInteiro = parseInt(prompt("Digite um valor:"));

if (valorInteiro < 0){
  valorInteiro = valorInteiro * -1
}

alert(valorInteiro);