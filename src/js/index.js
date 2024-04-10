/* 
    - Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
    Passo 2 - identificar o clique no botão 
    Passo 3 - adicionar a classe "ativo" nos projetos escondidos 

    ----------------------------------------------

    - Objetivo 2 - esconder o botão de mostrar mais 

    Passo 1 - pegar o botão e esconder ele 
*/

//  -------------------------------------

// Arquivo "dom" = a representação do html (acessar a informações do html)
// Classe, Objeto e Método


// Objetivo 1
//Passo 1

// "document" vai mostrar o conteúdo do html
// ou "let" invés do "const"
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = documentSelectorAll('.projeto:not(.ativo)'); // Por quê não pôs só "projeto"

//console.log(projetosInativos);


//Passo 2
// Escuta de espião no botão
botaoMostrarProjetos.addEventListener('click', () => {

    //Passo 3
    mostrarMaisProjetos();

    // Objetivo 2
    //Passo 1
    esconderBotao();
});


function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        //console.log(projetosInativos);
        projetoInativo.classList.add('ativo');
    });
}

