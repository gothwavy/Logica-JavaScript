// Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15.

let condicaoEnquanto = 0; contaExpoente = 1;

while (condicaoEnquanto <= 15) {
  console.log(`3 ^ ${condicaoEnquanto} = ${contaExpoente}`);
  contaExpoente = contaExpoente * 3;
  condicaoEnquanto++;
}
