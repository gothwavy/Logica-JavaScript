// Ler um valor e escrever se é positivo, negativo ou zero.

let numero = parseInt(prompt(`Digite um numero:`));

if (numero == 0) {
  console.log(`O numero e igual a 0!`);
} else if (numero > 0){
  console.log(`O numero e positivo!`);
} else {
  console.log(`O numero e negativo!`);
}