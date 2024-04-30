// Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é F  (9 * C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let tempCelsius = parseFloat(prompt(`Digite a temperatura em celsius:`));

let tempFahrenheit = (9 * tempCelsius + 160) / 5;

console.log(`A temperatura em Fahrenheit e: ${tempFahrenheit}F`);