/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1 - dar um jeito de pegar o elemento HTML dos botões//
const botoesCarrossel = document.querySelectorAll('.botao');


//passo 2 - dar um jeito de identificar o clique do usuário no botão//
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3 - desmarcar o botão selecionado anterior//
        desativarBotaoSelecionado();

        //passo 4 - marcar o botão clicado como se estivesse selecionada//
        selecionarBotaoCarrosel(botao);

        //passo 5 - esconder a imagem ativa de fundo//
        esconderImagemAtivida();
        
        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado//
        mostrarImagemDeFundo(indice);
        
    })
})



function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtivida() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
