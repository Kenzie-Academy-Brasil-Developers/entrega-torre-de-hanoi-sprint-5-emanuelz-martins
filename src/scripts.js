const torrePilhaUm = document.getElementById("torre__pilha--um");
const torreFinal = document.querySelector('#torre__pilha--tres');
const torreSecao = document.querySelectorAll(".torre__area");
let modoDoDiscoAtual = false;
let discoSelecionado;

criarDiscos();

function criarDiscos() {
    for (let i = 4; i > 0; i--) {
        let numero = i;
        let stringId = "disco" + numero;
        let disco = document.createElement("div");
        disco.id = stringId;
        disco.setAttribute("class", "discosTorre");
        torrePilhaUm.appendChild(disco);
    }
}

//------------SELECIONAR DISCO-------------------//
for (let index = 0; index < torreSecao.length; index++) {
    torreSecao[index].addEventListener("click", (evento) => {
        if(modoDoDiscoAtual === false) {
            selecionaDisco(evento);
        } else {
            colocarDisco(discoSelecionado);
        }
    });
}

function selecionaDisco(evento) {
    let torreAreaPilha = evento.currentTarget.childNodes[1];
    let selecionado = torreAreaPilha.lastChild;
    console.dir({ torreAreaPilha, torreAreaPilha, evento});
    if (selecionado.className === 'discosTorre') {
        torreAreaPilha.removeChild(selecionado);
    }
    discoSelecionado = selecionado;
    modoDoDiscoAtual = true;
    return selecionado;
}

function colocarDisco(disco) {
    for (let i = 0; i < torreSecao.length; i++) {
        torreSecao[i].addEventListener('click', () => {
            torreSecao[i].appendChild(disco);
        });
    }
}

function checarSeForUmaTorre() {

}

function checarVitoria() {
    if (torreFinal.childElementCount === 4) {
        const mensagemVitoria = document.querySelector('#msg-vitoria');
        const newDiv = document.createElement('div');

        newDiv.className = 'caixa-de-vitoria';
        newDiv.innerText = 'Parabéns!!! Você venceu!';
        mensagemVitoria.appendChild(newDiv);
    }
}

function sobrepor(selecaoPaiDiscos, discoSelecionado) {
    let ultimoDisco = selecaoPaiDiscos.lastChild;
    let idDisco1 = ultimoDisco.idDisco1;
    let numero1 = idDisco1[idDisco1.length - 1];
    let idDisco2 = discoSelecionado.id;
    let numero2 = idDisco2[idDisco2.length - 1];

    if (numero2 < numero1) {
        return true;
    }

    if (ultimoDisco === null) {
        return true;
    } else {
        return false;
    }
}
