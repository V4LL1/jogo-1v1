let xPortal = -3000;
let yPortal = 150;
let velocidadeDoPortal = 0;
// velocidadeDoPortal = 1.75;
let comprimentoDoPortal = 50;
let alturaDoPortal = 50;
let bonus = false;
let bonus2 = false;


function printPortal(){
  // desenha o Portal
  image(imagemDoPortal, xPortal, yPortal, comprimentoDoPortal, alturaDoPortal)
}

function portalJaPassou(xPortal){
  return xPortal > 650
}

function movePortal(){
  xPortal += velocidadeDoPortal;
}

function voltaPosicaoInicialDoPortal(){
  if (portalJaPassou(xPortal)){
    xPortal = -1500;
  }
}


function verificaHitPortal(){
  bonus = collideRectRect(xAtor, yAtor, comprimentoDoAtor, alturaDoAtor, xPortal, yPortal, comprimentoDoPortal, alturaDoPortal)
  if (bonus){
    voltaAtorParaPosicaoInicial();
    somDoPonto.play()
    meusPontos += 3;
  }
}

function verificaHitPortal2(){
  bonus2 = collideRectRect(xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2, xPortal, yPortal, comprimentoDoPortal, alturaDoPortal)
  if (bonus2){
    voltaAtor2ParaPosicaoInicial();
    somDoPonto.play()
    meusPontos2 += 3;
  }
}