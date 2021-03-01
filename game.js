

var altura = 0
var largura = 0

function adjustSizeLayout() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

adjustSizeLayout()

//generating random position based on window size
//gerando posição randomica com base no tamanho da janela
var positionX = Math.floor(Math.random() * largura) - 90
var positionY = Math.floor(Math.random() * altura) - 90

positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY

console.log(positionX, positionY);

//create the html element randomly
//criar o elemento html aleatoriamente
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = positionX + 'px'
mosquito.style.top = positionY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)