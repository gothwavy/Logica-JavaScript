// Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para estar em condições, um dos seguintes requisitos deve ser satisfeito: 
//  - Ter no mínimo 65 anos de idade. 
//  - Ter trabalhado no mínimo 30 anos. 
//  - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. 
// Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'

let numeroEmpregado = parseInt(prompt(`Digite o codigo do funcionario:`));
let nascimentoEmpregado = parseInt(prompt(`Digite o nascimento do funcionario:`));
let tempoEmpregado = parseInt(prompt(`Digite o ano de ingresso na empresa:`));

if (2024 - nascimentoEmpregado >= 65 || 2024 - tempoEmpregado >= 30){
  console.log(`Requerer aposentadoria!`);
} else if (2024 - nascimentoEmpregado >= 60 && 2024 - tempoEmpregado >= 25){
  console.log(`Requerer aposentadoria!`);
} else {
  console.log(`Nao requerer!`);
}