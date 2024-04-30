// Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem 
// dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5.

let primeiraNota, segundaNota, terceiraNota, quartaNota, mediaNota;

primeiraNota = parseFloat(prompt("Digite a primeira nota:"));
segundaNota = parseFloat(prompt("Digite a segunda nota:"));
terceiraNota = parseFloat(prompt("Digite a terceira nota:"));
quartaNota = parseFloat(prompt("Digite a quarta nota:"));

mediaNota = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

if (mediaNota >= 5) {
  alert(`A media do aluno e ${mediaNota}. Aluno aprovado!`);
} else {
  alert(`A media do aluno e ${mediaNota}. Aluno reprovado!`);
}