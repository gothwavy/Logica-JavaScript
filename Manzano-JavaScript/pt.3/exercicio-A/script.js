// Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.
let A, B, diferencaValores;

A = parseInt(prompt("Digite o valor de A:"));
B = parseInt(prompt("Digite o valor de B:"));

if (A > B){
  diferencaValores = A - B;
}else{
  diferencaValores = B - A
}

alert(`A diferenca dos dois numeros -> ${diferencaValores}`);