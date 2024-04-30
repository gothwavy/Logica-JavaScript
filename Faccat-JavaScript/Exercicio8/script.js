// Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

let totalEleitores, votosNulos, votosValidos, votosBrancos, percentualNulo, percentualValido, percentualBranco;

votosNulos = parseFloat(prompt(`Digite a quantidade de votos nulos:`));
votosValidos = parseFloat(prompt(`Digite a quantidade de votos validos:`));
votosBrancos = parseFloat(prompt(`Digite a quantidade de votos brancos:`));

totalEleitores = votosNulos + votosValidos + votosBrancos;
percentualNulo = ( votosNulos / totalEleitores) * 100;
percentualValido = ( votosValidos / totalEleitores) * 100;
percentualBranco = ( votosBrancos / totalEleitores) * 100;

alert(`O total de eleitores foi de ${totalEleitores}`);
alert(`O total de votos nulos foi ${votosNulos} e o percentual foi de ${percentualNulo}%`);
alert(`O total de votos validos foi ${votosValidos} e o percentual foi de ${percentualValido}%`);
alert(`O total de votos brancos foi ${votosBrancos} e o percentual foi de ${percentualBranco}%`);