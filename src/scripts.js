const torrePilhaUm = document.getElementById("torre__pilha--um");
const torreFinal = document.querySelector('#torre__pilha--tres');
const torreSecao = document.querySelectorAll(".torre__area");
const mensagem = document.querySelector('#msg');
const discosDeVisualização = document.querySelectorAll(".caixa__selecao > .discosTorre")
let modoAtualDoDisco = false;
let discoSelecionado;

criarDiscos();

function criarDiscos() {
    const imagens= ["src/imgs/paotopo.png", "src/imgs/ovo.png", "src/imgs/salada.png", "src/imgs/queijo.png", "src/imgs/carne.png", "src/imgs/paobase.png"];
    for (let i = 4; i >= 0; i--) {
        let numero = i+1;
        let stringId = "disco" + numero;
        let disco = document.createElement("div");
        let figure = document.createElement("figure")
        let img = document.createElement("img")
        img.setAttribute("src", imagens[i]);
        img.setAttribute("alt", "imagem de parte do hamburguer valor "+ i);
        disco.id = stringId;
        disco.setAttribute("class", "discosTorre");
        figure.appendChild(img);
        disco.appendChild(figure);
        torrePilhaUm.appendChild(disco);

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
        
        if(torreFinal.childElementCount === 5) {
            mostrarMensagemVitoria();
        }
    });

}
function mostrarSelecao(x){
    let cores = ["disco1", "disco2", "disco3", "disco4", "disco5", "disco6"];
    
    for(let i=0; i<cores.length; i++){
        if(x.id === cores[i]){
            discosDeVisualização[i].id = cores[i];
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
function tirarSelecao(x){
    for(let i=0; i<discosDeVisualização.length;i++) {
        discosDeVisualização[i].removeAttribute("id");
    }
}


function colocarDisco(evento) {
    let torreAreaPilha = evento.currentTarget.childNodes[1]
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

function mostrarMensagemVitoria() {
    const novaDiv = document.createElement('div');

    novaDiv.className = 'caixa-de-vitoria';
    novaDiv.innerText = 'Parabéns!!! Você venceu!';
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
