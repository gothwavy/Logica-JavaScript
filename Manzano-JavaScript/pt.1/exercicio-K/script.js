// Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.

let cotacaoDolar = parseFloat(prompt(`Digite a cotacao atual do dolar:`));
let valorReal = parseFloat(prompt(`Digite os reais a serem convertidos:`));

let valorDolar = valorReal / cotacaoDolar;

console.log(`O valor em dolares -> $${valorDolar}`);