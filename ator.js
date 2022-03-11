// arrumar onde nasce a sedenta
// arrumar o fanstama
// trocar o fundo
// iniciar a sedenta com velocidade 0


let xAtor =  180;
let yAtor = 345;
let comprimentoDoAtor = 47;
let alturaDoAtor = 47;
let velocidadeDoAtor = 1.7;
let hit = false;
let hitboxDaColisao = 20;



function printAtor(){
  // desenha o Annubis
  image(imagemDoAtor, xAtor, yAtor, comprimentoDoAtor, alturaDoAtor)
}

function moveAtor(){
  // adiciona movimento ao ator ao clicar nas teclas para cima e para baixo
    //cima e baixo
  if (keyIsDown(UP_ARROW)){
    yAtor -= velocidadeDoAtor;
  }  
  if (keyIsDown(DOWN_ARROW) && yAtor < 348){
      yAtor += velocidadeDoAtor; 
  }  
  // lados esquerda e direita 
  if (keyIsDown(LEFT_ARROW) && xAtor > 0){
    xAtor -= velocidadeDoAtor;
  }
  if (keyIsDown(RIGHT_ARROW) && xAtor < 453){
    xAtor += velocidadeDoAtor;
  }
}

function verificaHit(){
  // verifica se ouve colisao entre o annubis e os objetos
  for (let p = 0; p < imagemCarros.length; p++){
    hit = collideRectRect(xCarros[p], yCarros[p], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, comprimentoDoAtor, alturaDoAtor)
    if(hit){
      somDaColisao.play();
      voltaAtorParaPosicaoInicial();
      velocidadeDoAtor = 1.7;
      if (meusPontos > 0){
        meusPontos -= 1
      }
      if (modoAtaque){
        imagemDoAtor = loadImage('imagens/play1.png')
        modoAtaque = false;
      }
    }
  }
}



function voltaAtorParaPosicaoInicial(){
  // retorna o annubis a sua posição inicial
  xAtor = 180;
  yAtor = 345;
}

