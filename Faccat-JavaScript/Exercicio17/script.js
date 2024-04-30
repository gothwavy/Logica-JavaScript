// Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.  

let primeiraAvaliacao = parseFloat(prompt(`Digite o valor da primeira avaliacao:`));
let segundaAvaliacao = parseFloat(prompt(`Digite o valor da segunda avaliacao:`));
let mediaAvaliacoes = (primeiraAvaliacao + segundaAvaliacao) / 2;

if (mediaAvaliacoes >= 6){
  console.log(`Aluno aprovado!`);
  console.log(`Media final -> ${mediaAvaliacoes}`);
} else {
  console.log(`Aluno reprovado!`);
  console.log(`Media final -> ${mediaAvaliacoes}`);
}