let xCarros = [550, 525, 1250, 600, 550];
let yCarros = [40, 96, 150, 210, 262];
let velocidadeCarros = [0, 0, 0, 0, 0];
let comprimentoDoCarro = 60;
let alturaDoCarro = 30;


function mostraCarro(){
  for (let a = 0; a < imagemCarros.length; a++){
    image(imagemCarros[a], xCarros[a], yCarros[a], comprimentoDoCarro, alturaDoCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < - 50;
}
