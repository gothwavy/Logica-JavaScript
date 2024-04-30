// Morango -> ate 5 Kg -> R$ 2,50 por Kg || acima de 5 Kg -> R$ 2,20 por Kg 
// Maçã -> ate 5 Kg -> R$ 1,80 por Kg || acima de 5 Kg -> R$ 1,50 por Kg
// Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

let quiloMaca = parseFloat(prompt(`Digite os quilos de maca a serem adquiridos:`));
let quiloMorango = parseFloat(prompt(`Digite os quilos de morango a serem adquiridos:`));
let valorMaca, valorMorango;


if (quiloMaca <= 5) {
  valorMaca = quiloMaca * 2.5;
} else {
  valorMaca = quiloMaca * 2.2;
}
if (quiloMorango <= 5) {
  valorMorango = quiloMorango * 1.8;
} else {
  valorMorango = quiloMorango * 1.5;
}

let compraTotal = valorMaca + valorMorango;

if (quiloMaca + quiloMorango > 8 || compraTotal > 25) {
  compraTotal = compraTotal - compraTotal * 0.1;
}

console.log(`O valor a ser pago -> R$${compraTotal}`);