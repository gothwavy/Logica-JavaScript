// Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor, calcular e escrever o seu salário total.

let valorVendas = parseFloat(prompt(`Digite o valor de vendas total:`));
let valorFuncionario;

if (valorVendas <= 1500){
  valorFuncionario = valorVendas * 0.03;
} else{
  valorFuncionario = (valorVendas * 0.03) + (valorVendas - 1500) * 0.05;
}

console.log(`Salario do funcionario -> R$${valorFuncionario}`);