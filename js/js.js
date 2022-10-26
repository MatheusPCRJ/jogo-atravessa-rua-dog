// Função para dizer a LARGURA e ALTURA!
function setup(){
    createCanvas(1400, 600);
    // somDaTrilha.play()
    somDaTrilha.loop();
}

// Função para colocar as imagens e fundo no HTML. Repare que tem que 
// colocar na função preload antes para CARREGÁ-LAS!
function draw(){
    background(imagemDeFundo);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    posicaoInicialCarro();
    verificaColisao();
    incluiPontos();
    marcaPontos();
    mostraRacao();
}




