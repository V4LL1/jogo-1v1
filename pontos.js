let meusPontos = 0;
let meusPontos2 = 0

function exibePontos(){
  // pontos player 1
  textAlign(CENTER)
  textSize(25)
  fill(color(123,104,238))
  text(meusPontos, width / 5, 27)

  // pontos player 2
  textAlign(CENTER)
  textSize(25)
  fill(color(123,104,238))
  text(meusPontos2, width / 1.25 , 27)
}

function marcaPonto(){
  // marca ponto do player 1
  if (yAtor <= 14 && jogoComecou >= 1){
    meusPontos++;
    somDoPonto.play()
    voltaAtorParaPosicaoInicial()
    if (modoAtaque2 == true){
      modoAtaque2 = false;
      voltaAtor2ParaPosicaoInicial()
      imagemDoAtor2 = loadImage('imagens/play2.png') 
    }
  }
  
  //marca ponto player 2
  if (yAtor2 <= 14 && jogoComecou >= 1){
    meusPontos2++;
    somDoPonto.play()
    voltaAtor2ParaPosicaoInicial()
    if (modoAtaque == true){
      modoAtaque = false;
      voltaAtorParaPosicaoInicial()
      imagemDoAtor = loadImage('imagens/play1.png') 
    }
  }
}

