let xCoroa = 190;
let yCoroa = 312;

let xCoroa2 = 280;
let yCoroa2 = 312;

let comprimentoDoCoroa = 30;
let alturaDoCoroa = 30;


function printCoroa(){
  image(imagemDoCoroa, xCoroa, yCoroa, comprimentoDoCoroa, alturaDoCoroa)
}

function printCoroa2(){
  image(imagemDoCoroa, xCoroa2, yCoroa2, comprimentoDoCoroa, alturaDoCoroa)
}


function gameOver1Win(){
  if(meusPontos >= 50){
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    velocidadeDoAtor = 0;
    velocidadeDoAtor2 = 0;
    printCoroa()
    recarregar()
  }
}

function gameOver2Win(){
  if(meusPontos2 >= 50){
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    velocidadeDoAtor = 0;
    velocidadeDoAtor2 = 0;
    printCoroa2()
    recarregar()
  }
}

function recarregar(){
  let xf5 = 250;
  let yf5 = 100;
  
  textAlign(CENTER)
  textSize(25) // tamanho
  fill(color(123,104,238)) // cor
  
  let f5 = text('Para jogar de novo aperte a tecla F5...', xf5, yf5)

  
}