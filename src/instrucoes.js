const caixaInstrucoes = document.querySelector('#instrucoes');
const nomeJogador = document.querySelector('#nome');
const dificuldade = document.querySelector('#dificuldade-select');
const botaoInstrucoes = document.querySelector('#instrucoes-aceitas');

function getNome() {
    return nomeJogador;
}

function getDificuldade() {
    return dificuldade;
}

botaoInstrucoes.addEventListener('click', () => {
    caixaInstrucoes.setAttribute('class', 'hidden');
});
