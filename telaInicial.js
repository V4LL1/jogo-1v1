let xi1 = 254
let yi1 = 180


function menu(){
  
  textAlign(CENTER)
  textSize(29) // tamanho
  fill(color(123,104,238)) // cor
  
  let t1 = text('Aperte Enter para jogar...', xi1, yi1)
}

function someMenu(){
  xi1 = -300;
}

function jogar(){
  if (keyCode == 13){
    toqueSom =+ 1
    someMenu()
    menuDificuldade()
  }
}
