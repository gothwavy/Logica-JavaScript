// Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão e F = (9C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

let fahrenheit;

for (let i = 10; i <= 100; i += 10) {
  fahrenheit = (9 * i + 160) / 5;
  console.log(`Celsius = C${i} | Fahrenheit = F${fahrenheit}`);
}