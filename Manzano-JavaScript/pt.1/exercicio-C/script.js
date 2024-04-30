// Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume * Raio^2 * Altura 

let raioLata = parseFloat(prompt(`Digite o raio da lata:`));
let alturaLata = parseFloat(prompt(`Digite a altura da lata:`));

let volumeLata = 3.14 * raioLata ^ 2 * alturaLata;

console.log(`O voluma da lata ${volumeLata}`);