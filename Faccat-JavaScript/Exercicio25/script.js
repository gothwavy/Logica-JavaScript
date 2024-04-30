// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 

let numeroConta = parseInt(prompt(`Digite o numero da sua conta:`));
let saldoConta = parseFloat(prompt(`Digite o saldo da conta:`));
let debitoConta = parseFloat(prompt(`Digite o debito gasto da conta:`));
let creditoConta = parseFloat(prompt(`Digite o credito gasto da conta:`));

let saldoAtual = saldoConta - (debitoConta + creditoConta);

if (saldoAtual >= 0) {
  console.log(`Conta nº${numeroConta}`);
  console.log(`Saldo da conta R$${saldoAtual}. Saldo positivo!`);
} else {
  console.log(`Conta nº${numeroConta}`);
  console.log(`Saldo da conta R$${saldoAtual}. Saldo negativo!`);
}