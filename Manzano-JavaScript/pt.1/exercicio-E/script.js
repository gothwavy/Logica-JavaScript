// Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).

let valorPendente = parseFloat(prompt(`Digite o valor da divida pendente:`));
let taxaValor = parseFloat(prompt(`Digite a taxa sobre o valor pendente:`));
let mesesAtraso = parseFloat(prompt(`Digite os meses em atraso:`));

let prestacaoValor = valorPendente + (valorPendente * taxaValor / 100) * mesesAtraso;

console.log(`O valor pendente a ser pago e: R$${prestacaoValor}`);