// Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor correspondente em graus Celsius: 

let grausFahrenheit = parseFloat(prompt(`Digite os graus em Fahrenheit:`));

let grausCelsius = (grausFahrenheit - 32) / 1.8;

console.log(`Graus Fahrenheit -> ${grausFahrenheit}F`);
console.log(`Graus Celsius -> ${grausCelsius}ºC`);