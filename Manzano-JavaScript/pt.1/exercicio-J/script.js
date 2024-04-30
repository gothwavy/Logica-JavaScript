// Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacaoDolar = parseFloat(prompt(`Digite a cotacao atual do dolar:`));
let valorDolar = parseFloat(prompt(`Digite os dolares a serem convertidos:`));

let valorReal = valorDolar * cotacaoDolar;

console.log(`O valor em reais -> R$${valorReal}`);
