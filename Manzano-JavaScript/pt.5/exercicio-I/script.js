// Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

numero = parseInt(prompt(`Digite um numero:`));

if (numero >= 0) {
  maiorNumero = numero;
  menorNumero = numero;
  do {
    if (numero > maiorNumero) {
      maiorNumero = numero;
    }
    if (numero < menorNumero) {
      menorNumero = numero;
    }
    numero = parseInt(prompt(`Digite outro numero:`));
  } while (numero >= 0)
  console.log(`O maior valor foi: ${maiorNumero}`);
  console.log(`O menor valor foi: ${menorNumero}`);
}