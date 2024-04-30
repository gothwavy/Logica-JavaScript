//  Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal.

let nomePessoa = prompt(`Digite seu nome:`);
let alturaPessoa = parseInt(prompt(`Digite sua altura em cm:`));
let sexoPessoa = prompt(`Digite seu sexo (M) ou (F):`);
let pesoIdeal;

if (sexoPessoa == "M") {
  pesoIdeal = 72.7 * alturaPessoa - 58;
} else if (sexoPessoa == "F") {
  pesoIdeal = 62.1 * alturaPessoa - 44.7;
} else {
  console.log(`O sexo nao foi definido corretamente!`);
}

console.log(`${nomePessoa}, seu peso ideal -> ${pesoIdeal}KG`);