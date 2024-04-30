// Ler dois valores e imprimir uma das três mensagens a seguir:
// 'Números iguais’, caso os números sejam iguais 
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
// ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let A = parseInt(prompt(`Digite um valor:`));
let B = parseInt(prompt(`Digite outro valor:`));

if (A > B) {
  console.log(`Primeiro é maior`);
} else if (B > A) {
  console.log(`Segundo maior`);
} else {
 console.log(`Números iguais`);
}