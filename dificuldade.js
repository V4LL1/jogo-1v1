let jogoComecou = 0

let xt1 = 250;
let xt2 = 250;
let xt3 = 250;
let xt4 = 250;
let xt5 = 250;

let yt1 = 100;
let yt2 = 145;
let yt3 = 170;
let yt4 = 195;
let yt5 = 220;


function menuDificuldade(){
  
  textAlign(CENTER)
  textSize(20) // tamanho
  fill(color(123,104,238)) // cor
  
  let t1 = text('Escolha a dificuldade:', xt1, yt1)
  let t2 = text('Fácil: (H)', xt2, yt2)
  let t3 = text('Normal: (J)', xt3, yt3)
  let t4 = text('Difícil: (K)', xt4, yt4)
  let t5 = text('Insano: (L)', xt5, yt5)

}

function dificuldade(){
  
  if (keyCode == 74){
    velocidadeCarros = [5.2, 3.2, 2.2, 4, 6.3]; // normal
    velocidadeDoBota = 2.85;
    velocidadeDoPortal = 1.75
    velocidadeDoGhost = 1.4;
    
    someDificuldade()
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    jogoComecou += 1
  }
  if (keyCode == 72){ // easy
    velocidadeCarros = [4.1, 2.1, 1.1, 2.9, 5.2]
    someDificuldade()
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    velocidadeDoBota = 2.85;
    velocidadeDoPortal = 1.75
    velocidadeDoGhost = 1.4;
    jogoComecou += 1
  }
  if (keyCode == 75){ // very Hard
    velocidadeCarros = [6.2, 4.2, 3.2, 5, 8.3]
    someDificuldade()
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    velocidadeDoBota = 2.85;
    velocidadeDoPortal = 1.75
    velocidadeDoGhost = 1.4;
    jogoComecou += 1
  }
  if (keyCode == 76){ // IMPOSIBLE !!
    velocidadeCarros = [7.8, 4.8, 3.8, 5.6, 8.9]
    someDificuldade()
    voltaAtorParaPosicaoInicial()
    voltaAtor2ParaPosicaoInicial()
    velocidadeDoBota = 2.85;
    velocidadeDoPortal = 1.75
    velocidadeDoGhost = 1.4;
    jogoComecou += 1
  }
}
function someDificuldade(){
  xt1 = -250;
  xt2 = -250;
  xt3 = -250;
  xt4 = -250;
  xt5 = -250;
}

function jogando(){
  if (jogoComecou >= 1){
    exibePontos()
    mostraMago()
    mostraMago2()
  }
}

