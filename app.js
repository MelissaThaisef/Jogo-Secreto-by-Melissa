alert ('Bem vindo ao jogo número secreto da Melissa');
let NumeroMaximo = 2;
let numeroSecreto = parseInt (Math.random () * NumeroMaximo + 1);
let chute; 
let tentativas = 1;

//enquanto = while enquanto chute nao for igual ao numero secreto
// diferente usamos !=
while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${NumeroMaximo}`);
   // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break; 

       // se o chute não for igual 
    } else { 
       if (chute > numeroSecreto) {
         alert (`O numero secreto é menor que ${chute}`);
        } else {
          alert (`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas ++;
    }
}
let PalavraTentativa = tentativas > 1 ?'Tentativas.' : "tentativa." 
alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${PalavraTentativa}`);
// if(tentativas >1){
// alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
// alert (`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}

