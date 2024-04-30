// Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.

let a = parseInt(prompt(`Digite o valor de A:`));
let b = parseInt(prompt(`Digite o valor de B:`));
let c = parseInt(prompt(`Digite o valor de C:`));

if (a == 0) {
  
  console.log("A equação não é de segundo grau. 'a' deve ser diferente de zero.");

} else {

  let discriminante = b * b - 4 * a * c;

  if (discriminante > 0) {
    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log("As raízes da equação são:", x1, "e", x2);
  } else if (discriminante == 0) {
    let x = -b / (2 * a);
    console.log("A raiz da equação é:", x);
  } else {
    console.log("A equação não tem raízes reais.");
  }

}