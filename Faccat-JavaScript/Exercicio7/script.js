// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. 

let anos, meses, dias, calculoDias;

anos = parseInt(prompt(`Digite quantos anos voce possui:`));
meses = parseInt(prompt(`Digite quantos meses se passaram desde seu aniversario:`));
dias = parseInt(prompt(`Digite quantos dias se passaram desde seu aniversario:`));

calculoDias = anos * 365 + meses * 30 + dias;

console.log(`A sua idade em dias -> ${calculoDias}`);
