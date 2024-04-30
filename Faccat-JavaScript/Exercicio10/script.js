// O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor. 

let valorCarro = parseInt(prompt(`Digite o valor do carro:`));

let percentualDistribuidor = valorCarro * 28 / 100;
let percentualImposto = valorCarro * 45 / 100;
valorCarroFinal = valorCarro + percentualDistribuidor + percentualImposto;

console.log(`O valor final do carro -> R$${valorCarroFinal}`);