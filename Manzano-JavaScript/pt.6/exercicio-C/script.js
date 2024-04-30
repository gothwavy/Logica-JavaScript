// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)

let somaNumeros = 0;

for (let i = 1; i <= 100; i++) {
  somaNumeros += i;
}

console.log(somaNumeros);