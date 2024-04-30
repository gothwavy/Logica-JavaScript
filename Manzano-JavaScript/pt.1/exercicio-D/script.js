// Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.

let tempo = parseFloat(prompt(`Digite o tempo que foi gasto na viagem:`));
let velocidade = parseFloat(prompt(`Digite a velocidade media da viagem:`));

let distancia = tempo * velocidade;

let litrosUsados = distancia / 12;

console.log(`A velocidade media foi ${velocidade} Km/h`);
console.log(`O tempo gasto foi ${tempo}h`);
console.log(`A distancia percorrida foi ${distancia} Km`);
console.log(`A quantidade de litros foi ${litrosUsados}L`);
