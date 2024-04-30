// Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 

let valor = parseInt(prompt(`Digite um numero:`));

if (valor >= 10) {
  console.log(`É MAIOR QUE 10!`);
} else {
  console.log(`É MENOR QUE 10!`);
}