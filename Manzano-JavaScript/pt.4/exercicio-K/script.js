// Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.

let condicao = true, resposta, nomeComodo, larguraComodo, comprimentoComodo, areaComodo, areaCasa = 0;

while (condicao == true) {
  nomeComodo = prompt(`Digite o nome do comodo:`);
  larguraComodo = parseFloat(prompt(`Digite a largura do comodo:`));
  comprimentoComodo = parseFloat(prompt(`Digite o comprimento do comodo:`));
  areaComodo = larguraComodo * comprimentoComodo;
  console.clear();
  
  console.log(`${nomeComodo}: ${areaComodo} metros quadrados`);
  areaCasa += areaComodo;
  resposta = prompt(`Deseja calcular outros comodos? (SIM/NAO)`);
  if (resposta === "nao") {
    condicao = false;
  }
  console.clear();
}

console.log(`A area da casa e ${areaCasa} metros quadrados`);
