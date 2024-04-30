// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100). 

let condicaoEnquanto = 0, somaNumeros = 0;

while (condicaoEnquanto <= 100){
  somaNumeros = somaNumeros + condicaoEnquanto;
  condicaoEnquanto++
}

console.log(`A soma dos numeros -> ${somaNumeros}`);