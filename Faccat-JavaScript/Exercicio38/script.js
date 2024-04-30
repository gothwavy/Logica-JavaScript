// Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.

let codUsuario = parseInt(prompt(`Digite o codigo do usuario:`));

if (codUsuario == 1234){
  let senhaUsuario = parseInt(prompt(`Digite a sua senha:`));
  if (senhaUsuario == 9999){
    console.log(`Acesso permitido!`);
  } else {
    console.log(`Senha incorreta!`);
  }
} else {
  console.log(`Usuario invalido!`);
}