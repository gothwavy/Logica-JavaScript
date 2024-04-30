// Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 

let salarioAtual, salarioReajuste, salarioFinal;

salarioAtual = parseInt(prompt(`Digite o salario atual:`));
salarioReajuste = parseInt(prompt(`Digite o percentual de reajuste:`));

salarioFinal = salarioAtual + ((salarioAtual * salarioReajuste) / 100);

console.log(`O salario final -> R$${salarioFinal}`);
