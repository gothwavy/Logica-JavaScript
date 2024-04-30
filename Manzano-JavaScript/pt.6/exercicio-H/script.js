// Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^). 

let B = 5, E = 3;

for (let i = 1; i <= E; i++) {
  B *= E;
};

console.log(B);