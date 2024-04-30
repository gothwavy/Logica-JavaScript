// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

let valor, valorMaior, valorMenor;
valor = parseInt(prompt(`Digite um valor:`));
valorMaior = valor;
valorMenor = valor;

while (valor >= 0) {
  if (valor > valorMaior) {
    valorMaior = valor;
  }
  if (valor < valorMenor) {
    valorMenor = valor;
  }
  valor = parseInt(prompt(`Digite outro valor:`));
}

if (valorMaior >= 0) {
  console.log(`O maior valor foi ${valorMaior}`);
  console.log(`O menor valor foi ${valorMenor}`);
}
