// Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
// dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da 
// média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. 
// Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi 
// aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta 
// condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição. 

let primeiraNota, segundaNota, terceiraNota, quartaNota, mediaNota, notaExame, mediaExame;

primeiraNota = parseFloat(prompt("Digite a primeira nota:"));
segundaNota = parseFloat(prompt("Digite a segunda nota:"));
terceiraNota = parseFloat(prompt("Digite a terceira nota:"));
quartaNota = parseFloat(prompt("Digite a quarta nota:"));

mediaNota = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

if (mediaNota >= 7) {
  alert(`A media do aluno e ${mediaNota}. Aluno aprovado!`);
} else {
  notaExame = parseFloat(prompt(`A media do aluno e ${mediaNota}. Digite a nota do exame:`));
  mediaExame = (mediaNota + notaExame) / 2;
  if (mediaExame >= 5) {
    alert(`a media do aluno e ${mediaExame}. Aluno aprovado em exame!`);
  } else {
    alert(`a media do aluno e ${mediaExame}. Aluno reprovado!`);
  }
}
