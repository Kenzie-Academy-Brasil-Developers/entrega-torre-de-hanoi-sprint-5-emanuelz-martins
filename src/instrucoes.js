const caixaInstrucoes = document.querySelector('#instrucoes');
const nomeJogador = document.querySelector('#nome');
const dificuldade = document.querySelector('#dificuldade-select');
const botaoInstrucoes = document.querySelector('#instrucoes-aceitas');

function getNome() {
    return nomeJogador.value;
}

function getDificuldade() {
    return dificuldade.value;
}

botaoInstrucoes.addEventListener('click', () => {
    caixaInstrucoes.setAttribute('class', 'hidden');
    getNome();
    getDificuldade();
});
