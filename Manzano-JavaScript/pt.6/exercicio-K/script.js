// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10. 


let numero, valorFatorial = 1;

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    numero = i;
    for (let i = numero; i >= 1; i--) {
      valorFatorial *= numero;
      numero--;
    };
    console.log(valorFatorial);
    valorFatorial = 1;
  };

};