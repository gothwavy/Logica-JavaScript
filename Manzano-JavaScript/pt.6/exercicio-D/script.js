// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500. 

let somaNumeros = 0;

for (let i = 1; i <= 500; i++){
  if (i % 2 == 0){
    somaNumeros += i;
  };
};

console.log(somaNumeros);