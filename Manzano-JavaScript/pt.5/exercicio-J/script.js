// Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.

let dividendo = parseInt(prompt("Digite o dividendo: "));
let divisor = parseInt(prompt("Digite o divisor: "));

if (divisor === 0) {
  console.log("Erro: divisão por zero!");
} else {
  let quociente = 0;
  while (dividendo >= divisor) {
    dividendo -= divisor;
    quociente++;
  }
  console.log("O resultado inteiro da divisão é: " + quociente);
}