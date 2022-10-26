// X é largura Y é altura
let yAtor = 553
let xAtor = [400, 1300]
let colisao = false
let meusPontos = 0;
let descricao = "Pontos ";

let xRacao = [70, 210, 350, 490, 705, 845, 985, 1125, 1265];
let yRacao = 8;

function mostraRacao(){
    image(racao, xRacao[0], yRacao, 50, 40);
    image(racao, xRacao[1], yRacao, 50, 40);
    image(racao, xRacao[2], yRacao, 50, 40);
    image(racao, xRacao[3], yRacao, 50, 40);
    image(racao, xRacao[4], yRacao, 50, 40);
    image(racao, xRacao[5], yRacao, 50, 40);
    image(racao, xRacao[6], yRacao, 50, 40);
    image(racao, xRacao[7], yRacao, 50, 40);
    image(racao, xRacao[8], yRacao, 50, 40);
}

function mostraAtor(){
    image(vaquinha, xAtor[0], yAtor, 50, 40);
}


// Funções para movimentar a vaquinha(Ator) quando você pressiona  a tecla
function movimentaAtor(){
    if(keyIsDown(UP_ARROW)){
        yAtor -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
        if(podeSeMover()){
        yAtor += 3;
        }
    }
    if(keyIsDown(RIGHT_ARROW)){
        if(moverDireita()){
        xAtor[0] += 3;
        }
    }
    if(keyIsDown(LEFT_ARROW)){
        if(moverEsquerda()){
        xAtor[0] -= 3;
        }
    }
}

// Função que pega o arquivo collide2d que já criaram antes, função para colisão.
function verificaColisao(){
// collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for(let i = 0; i < imagensCarros.length; i++){
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor[0], yAtor, 30)
        if(colisao){
            voltaAtorParaPosicaoInicial()
            somDaColisao.play(); // adicionei o som da variavel da pasta imagens.js, dentro do if colisão
            if(pontosMaiorDoQueZero())
            meusPontos -= 1;
        }
        
    }
}

function voltaAtorParaPosicaoInicial(){
    yAtor = 553
}

// função para incluir pontos e design + descrição
function incluiPontos(){
    fill(color(0,255,255))
    textAlign(CENTER)
    textSize(45)
    text(meusPontos, 700, 43); // o 700 é largura e 43 altura
    text(descricao, 610, 43); // o 610 é largura e 43 altura
}

function marcaPontos(){
    if(yAtor < 15){
        meusPontos += 1;
        voltaAtorParaPosicaoInicial()
        somDoPonto.play()
    }
}

function pontosMaiorDoQueZero(){
    return meusPontos > 0
}

function podeSeMover(){
    return yAtor < 553
}

function moverDireita(){
    return xAtor[0] < 1350
}
function moverEsquerda(){
    return xAtor[0] > 0
}
