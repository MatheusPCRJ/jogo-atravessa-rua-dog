// xCarros é a posição dos carros, colocado em forma de arrays, distância
let xCarros = [1400, 1850, 1400, 1960, 1450, 2090, 1400, 2200, 1400, 1810, 1400, 1800];
let yCarros = [55, 55, 140, 140, 220, 220, 320, 320, 400, 400, 480, 480]
// let yCarros = [55, 140, 220, 320, 400, 480, 480];
let velocidadeXcarros = [4, 4, 5, 5, 8, 8, 8, 8, 5, 5, 4, 4];
let comprimentoCarro = 90
let alturaCarro = 55

// repare bem, mudança no for bem no final, invés de ser -> i = i + 1 <- podemos alterar para -> i++ <- que é a mesma coisa.
// com essa alteração estamos sofisticando nosso código e diminuindo.
function mostraCarro(){
    for(let i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

// essa parte matou, chamou imagensCarros lá no JS imagens.js, parecido com o FOR de cima, 
// mas pegando a velocidade, repare que xCarros e velocidadeXcarros estão conectados uns aos outros
function movimentaCarro(){
    for(let i = 0; i < imagensCarros.length; i++){
    xCarros[i] -= velocidadeXcarros[i];
    }
}

// Nessa função deixei como antes para se lembrar. i = i + 1
function posicaoInicialCarro(){
    for(let i = 0; i < imagensCarros.length; i = i + 1){
        if(passoTodaATela(xCarros[i])){
            xCarros[i] = 1800
        }
    }
}
function passoTodaATela(xCarros){
    return xCarros < - 150;
}





