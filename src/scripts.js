const torrePilhaUM = document.getElementById("torre__pilha--um")
// console.log(torrePilhaUM)

function criarDiscos() {
    for(let i=4; i>0; i--){
        let numero = i;
        let stringId = "disco" + numero;
        let disco = document.createElement("div");
        disco.id = stringId;
        disco.setAttribute("class", "discosTorre");
        // console.log(disco)
        torrePilhaUM.appendChild(disco);

    }
}
criarDiscos()

//------------SELECIONAR DISCO-------------------//


const torreSecao = document.querySelectorAll(".torre__area")
for(let index=0; index<torreSecao.length;index++){
    torreSecao[index].addEventListener("click", selecionaDisco)
}

function selecionaDisco(e){
    let torreAreaPilha = e.currentTarget.childNodes[1];
    console.dir(torreAreaPilha)
    let selecionado = torreAreaPilha.lastChild
    torreAreaPilha.removeChild(selecionado)


}




//-------------a = selecao pai dos discos(área clicada) // b= disco selecionado

function sobrepor(a, b) {
    let ultimoDisco = a.lastChild;
    let id1 = ultimoDisco.id1
    let numero1= id1[id1.length-1]
    let id2 = b.id
    let numero2 = id2[id2.length-1]

    if(numero2 < numero1){
        return true
    }

    if(ultimoDisco === null){
        return true
    }
    else { return false}
}
