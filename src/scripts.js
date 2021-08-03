const torrePilhaUm = document.getElementById("torre__pilha--um");
const torreFinal = document.querySelector('#torre__pilha--tres');
const torreSecao = document.querySelectorAll(".torre__area");
const discosDeVisualização = document.querySelectorAll(".caixa__selecao > .discosTorre")
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
            colocarDisco(evento);
        }
    });
}
function mostrarSelecao(x){
    let cores = ["disco1", "disco2", "disco3", "disco4"];
    
    // console.log(discosSelecao)
    for(let i=0; i<cores.length; i++){
        if(x.id === cores[i]){
            discosDeVisualização[i].id = cores[i];
        }
    }
}


function selecionaDisco(evento) {
    let torreAreaPilha = evento.currentTarget.childNodes[1];
    let selecionado = torreAreaPilha.lastChild;
    // console.dir(torreAreaPilha);
    // console.log(torreAreaPilha);

    if (selecionado.className === 'discosTorre') {
        torreAreaPilha.removeChild(selecionado);
        discoSelecionado = selecionado;
        modoDoDiscoAtual = true;
        mostrarSelecao(discoSelecionado);
    }
}
function tirarSelecao(x){
    for(let i=0; i<discosDeVisualização.length;i++){
        discosDeVisualização[i].removeAttribute("id")
    }
}


function colocarDisco(evento) {

    let torreAreaPilha = evento.currentTarget.childNodes[1]
    let discoPresente = torreAreaPilha.lastChild;
    // console.dir(torreAreaPilha);
    // console.log(torreAreaPilha.childElementCount);

    if(torreAreaPilha.childElementCount === 1){
        torreAreaPilha.appendChild(discoSelecionado);
        modoDoDiscoAtual = false;
        tirarSelecao(discoSelecionado);
    } else {
        if(sobrepor(discoPresente, discoSelecionado)){
        torreAreaPilha.appendChild(discoSelecionado) 
        modoDoDiscoAtual = false
        tirarSelecao(discoSelecionado);

        }
        else{ alert("Escolha um cone que tenha um disco maior embaixo.")
        }
    }

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

function sobrepor(discoPresente, discoSelecionado) {
    let numero1 = discoPresente.id;
    let numero2 = discoSelecionado.id;
   
    if (numero1 > numero2) {
        return true;
    } else {
        return false;
    }
}
