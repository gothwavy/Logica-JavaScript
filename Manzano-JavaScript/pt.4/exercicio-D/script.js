// Apresentar todos os valores numéricos inteiros ímpares situados na faixa de 0 a 20. 

let condicaoEnquanto = 1;

while (condicaoEnquanto <= 20) {
  if (condicaoEnquanto % 2 == 1) {
    console.log(`Numero impar -> ${condicaoEnquanto}`);
  }
  condicaoEnquanto++;
}