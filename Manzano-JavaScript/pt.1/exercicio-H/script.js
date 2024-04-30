// Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME  COMPRIMENTO * LARGURA * ALTURA.

let comprimento = parseFloat(prompt(`Digite o comprimento da caixa`));
let largura = parseFloat(prompt(`Digite a largura da caixa`));
let altura = parseFloat(prompt(`Digite a altura da caixa`));

let volume = comprimento * largura * altura;

console.log(`O volume da caixa -> ${volume}M`)