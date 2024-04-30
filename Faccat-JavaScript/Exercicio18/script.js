// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).  

let anoNascimento = parseInt(prompt(`Digite o seu ano de nascimento:`));
let anoAtual = parseInt(prompt(`Digite o ano atual:`));
let permissaoVoto = anoAtual - anoNascimento;

if (permissaoVoto >= 16) {
  console.log(`Pode votar!`);
} else {
  console.log(`Nao pode votar!`);
}