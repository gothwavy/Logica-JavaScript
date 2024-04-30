// Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.

let A = parseInt(prompt(`Digite o valor de A:`));
let B = parseInt(prompt(`Digite o valor de B:`));
let C = parseInt(prompt(`Digite o valor de C:`));

if (A > B && A > C) {
  if (B > C) {
    console.log(`O valor em ordem crescente ${C}, ${B}, ${A}`);
  } else {
    console.log(`O valor em ordem crescente ${B}, ${C}, ${A}`);
  }
} else if (B > C && B > A) {
  if (C > A) {
    console.log(`O valor em ordem crescente ${A}, ${C}, ${B}`);
  } else {
    console.log(`O valor em ordem crescente ${C}, ${A}, ${B}`);
  }
} else if (C > A && C > B) {
  if (A > B) {
    console.log(`O valor em ordem crescente ${B}, ${A}, ${C}`);
  } else {
    console.log(`O valor em ordem crescente ${A}, ${B}, ${C}`);
  }
}