const botaoMenu = document.querySelector('#menu');
const navegacao = document.querySelector('nav');

botaoMenu.addEventListener('click', () => {
  navegacao.classList.toggle('aberto');
  botaoMenu.textContent = botaoMenu.textContent === '☰' ? '✖' : '☰';
});

const anoAtual = document.querySelector('#anoatual');
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.querySelector('#ultimamodificacao');
ultimaModificacao.textContent = `Última modificação: ${document.lastModified}`;
