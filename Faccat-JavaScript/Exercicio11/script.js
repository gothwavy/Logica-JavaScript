// Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

let vendasTotal = parseFloat(prompt(`Digite o valor total de vendas:`));
let carrosVendidos = parseFloat(prompt(`Digite quanto carros foram vendidos pelo funcionario:`));
let comissaoCarro = parseFloat(prompt(`Digite a comissao que o funcionario recebe por venda:`));
let salarioFixo = parseFloat(prompt(`Digite o valor do salario fixo do funcionario:`));

let percentualVendasTotal = vendasTotal * 5 / 100;
let comissaoVendaCarros = carrosVendidos * comissaoCarro;
let salarioFinal = salarioFixo + percentualVendasTotal + comissaoVendaCarros;

console.log(`O salario final do funcionario -> R$${salarioFinal}`);