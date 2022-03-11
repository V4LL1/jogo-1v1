let xGhost =  228;
let yGhost = -3400;
let comprimentoDoGhost = 50;
let alturaDoGhost = 50;
let velocidadeDoGhost = 0;
// velocidadeDoGhost = 1.4;


function printGhost(){
  // desenha o fantasma
  image(imagemDoGhost, xGhost, yGhost, comprimentoDoGhost, alturaDoGhost)
}

function ghostJaPassou(xGhost){
  return yGhost > 400; 
}

function moveGhost(){
  yGhost += velocidadeDoGhost;
}

function voltaPosicaoInicialDoGhost(){
  if (ghostJaPassou(xGhost)){
    yGhost = -4080;
  }
}


function verificaHitGhost(){
  zero = collideRectRect(xAtor, yAtor, comprimentoDoAtor, alturaDoAtor, xGhost, yGhost, comprimentoDoGhost, alturaDoGhost)
  if (zero){
    voltaAtorParaPosicaoInicial();
    somDaColisao.play()
    meusPontos = 0;
    meusPontos2 += 5;
    velocidadeDoAtor2 *= 1.25;
    yGhost = -4080;
  }
}

function verificaHitGhost2(){
  zero2 = collideRectRect(xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2, xGhost, yGhost, comprimentoDoGhost, alturaDoGhost)
  if (zero2){
    voltaAtor2ParaPosicaoInicial();
    somDaColisao.play()
    meusPontos2 = 0;
    meusPontos += 5
    velocidadeDoAtor *= 1.25;
    yGhost = -4080;
  }
}
