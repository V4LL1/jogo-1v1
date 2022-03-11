let xBota = -1750;
let yBota = 40;
let comprimentoDoBota = 34;
let alturaDoBota = 34;
let velocidadeDoBota = 0;
// velocidadeDoBota = 2.85;
let speed = false;
let speed2 = false;


function printBota(){
  // desenha a bota
  image(imagemDoBota, xBota, yBota, comprimentoDoBota, alturaDoBota)
}

function botaJaPassou(xBota){
  return xBota > 650
}

function moveBota(){
  xBota += velocidadeDoBota;
}

function voltaPosicaoInicialDoBota(){
  if (botaJaPassou(xBota)){
    xBota = -1750;
  }
}

function verificaHitBota(){
  speed = collideRectRect(xAtor, yAtor, comprimentoDoAtor, alturaDoAtor, xBota, yBota, comprimentoDoBota, alturaDoBota)
  if (speed){
    voltaAtorParaPosicaoInicial();
    somDoPonto.play()
    meusPontos += 1;
    velocidadeDoAtor *= 1.17;
  }
}

function verificaHitBota2(){
  speed2 = collideRectRect(xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2, xBota, yBota, comprimentoDoBota, alturaDoBota)
  if (speed2){
    voltaAtor2ParaPosicaoInicial();
    somDoPonto.play()
    meusPontos2 += 1;
    velocidadeDoAtor2 *= 1.17;
  }
}
