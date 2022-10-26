// Imagens e Sons do jogo!

let imagemDeFundo;
let imagemCarroUm;
let imagemCarroDois;
let imagemCarroTres;
let vaquinha;

let racao;

// sons do jogo!
let somDaTrilha;
let somDaColisao;
let somDoPonto;

// função para carregar os conteúdos na tela
function preload(){
    imagemDeFundo = loadImage("imagens/estrada.png");
    imagemCarroUm = loadImage("imagens/carro-1.png");
    imagemCarroDois = loadImage("imagens/carro-2.png");
    imagemCarroTres = loadImage("imagens/carro-3.png");
    vaquinha = loadImage("imagens/ator-1.png");
    racao = loadImage("imagens/racao-1.png");
    imagensCarros = [imagemCarroUm, imagemCarroDois, imagemCarroTres, imagemCarroDois, imagemCarroUm, imagemCarroTres,
    imagemCarroUm, imagemCarroDois, imagemCarroTres, imagemCarroUm, imagemCarroTres, imagemCarroUm];
    
    somDaTrilha = loadSound("sons/trilha.mp3");
    somDaColisao = loadSound("sons/colidiu.mp3");
    somDoPonto = loadSound("sons/pontos.wav");

}