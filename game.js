

var altura = 0
var largura = 0
var lifes = 1

function adjustSizeLayout() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}

adjustSizeLayout()

function randomPosition() {

    //remove previous mosquito if it exists
    //remover mosquito anterior (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (lifes > 3) {
            alert('game over')
        } else {
            document.getElementById('life' + lifes).src = "imagens/coracao_vazio.png"

            lifes++
        }


    }

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
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function () {
        this.remove();
    }

    document.body.appendChild(mosquito)

}
//generating random class for mosquito size
//gerando classe aleatoria para o tamanho do mosquito
function randomSize() {
    var classe = Math.floor(Math.random() * 3)

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'


    }

}

function randomSide() {
    var classe = Math.floor(Math.random() * 2)

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'


    }
}