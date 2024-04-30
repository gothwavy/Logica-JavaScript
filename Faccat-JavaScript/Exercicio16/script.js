// As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. 

let qntdMacas = parseInt(prompt(`Digite a quantidade macas que serao compradas:`));

if (qntdMacas < 12){
  let valorMacas = 1.3;
  let valorFinalMacas = qntdMacas * valorMacas;
  console.log(`O valor das macas -> R$${valorFinalMacas}`);
} else {
  let valorMacas = 1;
  let valorFinalMacas = qntdMacas * valorMacas;
  console.log(`O valor das macas -> R$${valorFinalMacas}`);
}
