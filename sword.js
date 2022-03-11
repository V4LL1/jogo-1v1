let xSword = 228;
let ySword = 200;
let comprimentoDoSword = 35;
let alturaDoSword = 35;
let velocidadeDoSword = 4; //-2
console.log(ySword)



function mostraSword(){
  image(imagemDoSword, xSword, ySword, comprimentoDoSword, alturaDoSword)

}

function moveSword(){
  ySword += velocidadeDoSword;
}

function swordJaPassou(xSword){
  return ySword < 400;
}

function voltaPosicaoInicialDoSword(){
  if (swordJaPassou(xSword)){
    ySword = 10900;
  }
}

// player 1

let modoAtaque = false;

function verificaHitItemSword(){
  itemSword = collideRectRect(xAtor, yAtor, comprimentoDoAtor, alturaDoAtor, xSword, ySword, comprimentoDoSword, alturaDoSword)
  if (itemSword){
    voltaAtorParaPosicaoInicial();
    somDoPonto.play()
    velocidadeDoAtor *= 1.17;
    imagemDoAtor = loadImage('imagens/redAtor.png')
    modoAtaque = true;
    ySword = -2750;
    velocidadeDoSword = 0;
  }
}

function verificaHitNoModoDeAtaque(){
  atacou = collideRectRect(xAtor, yAtor, comprimentoDoAtor, alturaDoAtor, xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2)
  if (atacou){
    voltaAtorParaPosicaoInicial();
    voltaAtor2ParaPosicaoInicial();
    somDoPonto.play()
    meusPontos += 15;
    imagemDoAtor = loadImage('imagens/play1.png')
    modoAtaque = false;
  }
}

function modoDeAtaque(){
  if (modoAtaque == true){
    verificaHitNoModoDeAtaque()
  }
}

// player 2


let modoAtaque2 = false;

function verificaHitItemSword2(){
  itemSword2 = collideRectRect(xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2, xSword, ySword, comprimentoDoSword, alturaDoSword)
  if (itemSword2){
    voltaAtor2ParaPosicaoInicial();
    somDoPonto.play()
    velocidadeDoAtor2 *= 1.17;
    imagemDoAtor2 = loadImage('imagens/blueAtor2.png')
    modoAtaque2 = true;
    ySword = -2750;
    velocidadeDoSword = 0;
  }
}

function verificaHitNoModoDeAtaque2(){
  atacou2 = collideRectRect(xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2, xAtor, yAtor, comprimentoDoAtor, alturaDoAtor)
  if (atacou2){
    voltaAtorParaPosicaoInicial();
    voltaAtor2ParaPosicaoInicial();
    somDoPonto.play()
    meusPontos2 += 15;
    imagemDoAtor2 = loadImage('imagens/play2.png')
    modoAtaque = false
  }
}

function modoDeAtaque2(){
  if (modoAtaque2){
    verificaHitNoModoDeAtaque2()
  }
}


