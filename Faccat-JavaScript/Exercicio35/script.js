// Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.
// Álcool -> até 20 litros, desconto de 3% por litro  
// Álcool -> acima de 20 litros, desconto de 5% por litro 
// Gasolina -> até 20 litros, desconto de 4% por litro 
// Gasolina -> acima de 20 litros, desconto de 6% por litro

console.log(`Selecione o combustivel pela letra de acordo com o nome`);
let combustivelTipo = prompt(`A -> Alcool | G -> Gasolina:`);
let qntdLitros = parseInt(prompt(`Digite a quantidade de litros totais:`));
let valorFinal;

if (combustivelTipo == "A") {
  if (qntdLitros <= 20) {
    valorFinal = qntdLitros * 2.9 - qntdLitros * 0.03;
    console.log(`O valor a ser pago e: R$${valorFinal}`);
  } else {
    valorFinal = qntdLitros * 2.9 - qntdLitros * 0.05;
    console.log(`O valor a ser pago e: R$${valorFinal}`);
  }
} else if (combustivelTipo == "G") {
  if (qntdLitros <= 20) {
    valorFinal = qntdLitros * 3.3 - qntdLitros * 0.04;
    console.log(`O valor a ser pago e: R$${valorFinal}`);
  } else {
    valorFinal = qntdLitros * 3.3 - qntdLitros * 0.06;
    console.log(`O valor a ser pago e: R$${valorFinal}`);
  }
} else {
  console.log(`O valor a ser pago e: R$${valorFinal}`);
}