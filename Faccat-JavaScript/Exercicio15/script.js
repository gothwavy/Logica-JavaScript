// Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 

let valor = parseInt(prompt(`Digite um valor:`));

if (valor >= 0) {
  console.log(`Numero positivo!`);
} else {
  console.log(`Numero negativo!`);
}