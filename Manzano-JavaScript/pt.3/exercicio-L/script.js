// Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.

let nomePessoa = prompt(`Digite o seu nome:`);
let sexoPessoa = prompt(`Selecione o seu sexo: "M" ou "F"`);

if (sexoPessoa == "M") {
  console.log(`Ilmo Sr. ${nomePessoa}`)
} else if (sexoPessoa == "F") {
  console.log(`Ilma Sra. ${nomePessoa}`)
} else {
  console.log(`Sexo invalido!`);
}
