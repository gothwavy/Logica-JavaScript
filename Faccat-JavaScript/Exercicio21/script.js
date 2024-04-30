// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

let horaInicio = parseInt(prompt(`Digite a hora de início do jogo:`));
let horaFim = parseInt(prompt(`Digite a hora de fim do jogo:`));

let duracao = horaFim - horaInicio;

if (duracao <= 0) {
  duracao += 24;
}

console.log(`A duração do jogo é de ${duracao}h`);