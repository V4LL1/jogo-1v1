// codigos para as imagens

// criando as variaveis do cenário

let imagemDoFundo;
let imagemDoAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemDoPortal;
// sons

let somDaTrilha;
let somDoPonto;
let SomDaColisao;

function preload(){
  // carrega as imagens na memória
  imagemDoFundo = loadImage('imagens/back06.png')
  imagemDoAtor = loadImage('imagens/play1.png')
  imagemDoAtor2 = loadImage('imagens/play2.png')
  imagemDoMago = loadImage('imagens/wizardFake.png')
  
  
  imagemCarro1 = loadImage('imagens/fireball.png')
  imagemCarro2 = loadImage('imagens/blueBall.png')
  imagemCarro3 = loadImage('imagens/batFast.png')
  
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]

  
  imagemDoPortal = loadImage('imagens/portal.png')
  imagemDoBota = loadImage('imagens/bota.png')
  imagemDoGhost = loadImage('imagens/ghostmane.png')
  imagemDoCoroa = loadImage('imagens/coroa.png')
  imagemDoSword = loadImage('imagens/sedenta.png')
  
  // carrega os sons na memória
  somDaTrilha = loadSound('sons/rpgTrilha.mp3')
  somDaColisao = loadSound('sons/colidiu.mp3')
  somDoPonto = loadSound('sons/pontos.wav')
}

