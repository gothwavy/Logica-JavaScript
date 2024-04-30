// Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

let SM = parseFloat(prompt(`Digite o salario do trabalhador:`));
let PR = parseFloat(prompt(`Digite o percentual de reajuste no salario do trabalhador:`));
let NS = SM + (SM * PR) / 100;

console.log(`O salario reajustado -> R$${NS}`);