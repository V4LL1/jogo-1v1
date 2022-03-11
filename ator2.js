let xAtor2 = 270;
let yAtor2 = 345;
let comprimentoDoAtor2 = 47;
let alturaDoAtor2 = 47;
let velocidadeDoAtor2 = 1.7;
let hit2 = false;
let hitboxDaColisao2 = 20;


function printAtor2(){
  // desenha o ladrão
  image(imagemDoAtor2, xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2)
}

function moveAtor2(){
  // adiciona movimento ao ator ao clicar nas teclas para cima e para baixo
    //cima e baixo
  if (keyIsDown(87)){
    // cima
    yAtor2 -= velocidadeDoAtor2;
  }  
  if (keyIsDown(83) && yAtor2 < 348){
    // baixo  
    yAtor2 += velocidadeDoAtor2; 
  }  
  // lados esquerda e direita 
  if (keyIsDown(65) && xAtor2 > 0){
    // esquerda
    xAtor2 -= velocidadeDoAtor2;
  }
  if (keyIsDown(68) && xAtor2 < 453){
    // direita
    xAtor2 += velocidadeDoAtor2;
  }
}

function verificaHit2(){
  // verifica se ouve colisao entre o ladrão e os objetos
  for (let c = 0; c < imagemCarros.length; c++){
    hit2 = collideRectRect(xCarros[c], yCarros[c], comprimentoDoCarro, alturaDoCarro, xAtor2, yAtor2, comprimentoDoAtor2, alturaDoAtor2)
    if(hit2){
      somDaColisao.play()
      voltaAtor2ParaPosicaoInicial()
      velocidadeDoAtor2 = 1.7;
      if(meusPontos2 > 0){
        meusPontos2 -= 1
      }
      if(modoAtaque2){
        imagemDoAtor2 = loadImage('imagens/play2.png')
        modoAtaque2 = false; 
      }
  }
}
}

function voltaAtor2ParaPosicaoInicial(){
  // volta o ladrão para a posiçao inicial
  xAtor2 = 270;
  yAtor2 = 345;
}