const torrePilhaSelecao = document.getElementById("torre__pilha--selecao");
const torrePilhaUm = document.getElementById("torre__pilha--um");
const torreFinal = document.querySelector('#torre__pilha--tres');
const torreSecao = document.querySelectorAll(".torre__area");
const mensagem = document.querySelector('#msg');
const discosDeVisualizacao = document.querySelectorAll("#caixa__selecao > .discosTorre");
let modoAtualDoDisco = false;
let discoSelecionado;

criarDiscos(getDificuldade());

function montarHamburguer(dificuldade, imagens){
    for (let i = dificuldade; i > 0; i--) {
        let numero = i;
        let stringId = "disco" + numero;
        let disco = document.createElement("div");
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        img.setAttribute("src", imagens[i-1]);
        img.setAttribute("alt", "imagem de parte do hamburguer valor "+ i);
        disco.id = stringId;
        disco.setAttribute("class", "discosTorre");
        figure.appendChild(img);
        disco.appendChild(figure);
        torrePilhaUm.appendChild(disco);
    }
}
function montarHamburguerSelecionado(dificuldade, imagens){
    for (let i = dificuldade; i > 0; i--) {
        let numero = i;
        let stringId = "discoSelecionado" + numero;
        let disco = document.createElement("div");
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        img.setAttribute("src", imagens[i-1]);
        img.setAttribute("alt", "imagem de parte do hamburguer valor "+ i);
        disco.id = stringId;
        disco.setAttribute("class", "discosTorre");
        figure.appendChild(img);
        disco.appendChild(figure);
        torrePilhaSelecao.appendChild(disco);
    }
}
function criarDiscos(dificuldade) {
    if(dificuldade === 4){
        const imagens = ["src/imgs/paotopo.png", "src/imgs/queijo.png", "src/imgs/carne.png", "src/imgs/paobase.png"];
        montarHamburguer(dificuldade, imagens)
        montarHamburguerSelecionado(dificuldade, imagens)

    }
    else if(dificuldade === 5){
        const imagens = ["src/imgs/paotopo.png","src/imgs/salada.png", "src/imgs/queijo.png", "src/imgs/carne.png", "src/imgs/paobase.png"];
        montarHamburguer(dificuldade, imagens)
        montarHamburguerSelecionado(dificuldade, imagens)
    }
    else if(dificuldade === 6){
        const imagens = ["src/imgs/paotopo.png","src/imgs/ovo.png","src/imgs/salada.png", "src/imgs/queijo.png", "src/imgs/carne.png", "src/imgs/paobase.png"];
        montarHamburguer(dificuldade, imagens)
        montarHamburguerSelecionado(dificuldade, imagens)
    }
}

//------------SELECIONAR DISCO-------------------//
for (let index = 0; index < torreSecao.length; index++) {
    torreSecao[index].addEventListener("click", (evento) => {
        if (modoAtualDoDisco === false) {
            selecionaDisco(evento);
        } else {
            colocarDisco(evento);
        }

        if (torreFinal.childElementCount === 5) {
            mostrarMensagemVitoria();
            setTimeout(() => {
                mensagem.innerText = '';
            }, 10000);
        }
    });
}
function mostrarSelecao(discoSelecionado) {
    let cores = ["disco1", "disco2", "disco3", "disco4", "disco5", "disco6"];
    let cores2 = ["disco1Selecao", "disco2Selecao", "disco3Selecao", "disco4Selecao", "disco5Selecao", "disco6Selecao"];

    for (let i = 0; i < cores.length; i++) {
        if (discoSelecionado.id === cores[i]) {
            discosDeVisualizacao[i].id = cores2[i];
        }
    }
}

function selecionaDisco(evento) {
    let torreAreaPilha = evento.currentTarget.childNodes[1];
    let selecionado = torreAreaPilha.lastChild;

    if (selecionado.className === 'discosTorre') {
        torreAreaPilha.removeChild(selecionado);
        discoSelecionado = selecionado;
        modoAtualDoDisco = true;
        mostrarSelecao(discoSelecionado);
    }
}

function tirarSelecao(x) {
    for (let i = 0; i < discosDeVisualizacao.length; i++) {
        discosDeVisualizacao[i].removeAttribute("id");
    }
}

function colocarDisco(evento) {
    let torreAreaPilha = evento.currentTarget.childNodes[1];
    let discoPresente = torreAreaPilha.lastChild;

    if (torreAreaPilha.childElementCount === 1) {
        torreAreaPilha.appendChild(discoSelecionado);
        modoAtualDoDisco = false;
        tirarSelecao(discoSelecionado);
    } else {
        if (sobrepor(discoPresente, discoSelecionado)) {
            torreAreaPilha.appendChild(discoSelecionado)
            modoAtualDoDisco = false;
            tirarSelecao(discoSelecionado);
        } else {
            mostrarMensagemErro();
            setTimeout(() => {
                mensagem.innerText = '';
            }, 1300);
        }
    }
}
// INCLUIR NOME DO INPUT
function mostrarMensagemVitoria() {
    const novaDiv = document.createElement('div');

    novaDiv.className = 'caixa-de-vitoria';
    novaDiv.innerText = 'Parabéns!!! Você venceu!';
    novaDiv.style.color = 'gold';
    mensagem.appendChild(novaDiv);
}

function mostrarMensagemErro() {
    const novoSpan = document.createElement('span');

    novoSpan.className = 'mensagem-erro-tamanho';
    novoSpan.innerText = 'Não é possível sobrepor uma peça maior que a anterior!!';
    novoSpan.style.color = 'red';
    mensagem.appendChild(novoSpan);
}

function sobrepor(discoPresente, discoSelecionado) {
    let numero1 = discoPresente.id;
    let numero2 = discoSelecionado.id;

    if (numero1 > numero2) {
        return true;
    } else {
        return false;
    }
}
