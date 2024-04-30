// Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: 
//  - Se quantidade <= 5 o desconto será de 2% 
//  - Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
//  - Se quantidade > 10 o desconto será de 5%

let nomeProduto = prompt(`Digite o nome do produto:`);
let qntdProduto = parseInt(prompt(`Digite a quantidade adquirida:`));
let valorProduto = parseInt(prompt(`Digite o valor do produto:`));

let valorTotal = qntdProduto * valorProduto;
let descontoProduto;

if (qntdProduto <= 5) {
  descontoProduto = valorTotal * 0.02;
  valorTotal = valorTotal - descontoProduto;
} else if (qntdProduto > 5 && qntdProduto <= 10) {
  descontoProduto = valorTotal * 0.03;
  valorTotal = valorTotal - descontoProduto;
} else if (qntdProduto > 10) {
  descontoProduto = valorTotal * 0.05;
  valorTotal = valorTotal - descontoProduto;
}

console.log(`Valor total da compra de ${nomeProduto} -> R$${valorTotal}`);