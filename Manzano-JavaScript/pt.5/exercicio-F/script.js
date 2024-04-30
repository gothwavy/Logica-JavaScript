// Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.
let numero, somaNumeros = 0, contadora = 0, mediaNumeros;

numero = parseInt(prompt(`Digite um valor:`));

if (numero >= 1) {
  do {
    somaNumeros += numero;
    contadora++;
    numero = parseInt(prompt(`Digite outro valor:`));
  } while (numero >= 0);
  mediaNumeros = somaNumeros / contadora;
  console.log(`O valor do somatorio: ${somaNumeros}`);
  console.log(`O valor da media: ${mediaNumeros}`);
  console.log(`Foram lidos ${contadora} numeros antes do ciclo se quebrar!`);
};
