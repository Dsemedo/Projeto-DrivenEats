
function selecionarPrato(elemento){
    const pratoClicado = document.querySelector(".borda-verde");

    if (pratoClicado !== null){
        pratoClicado.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");
    
}

function selecionarBebida(elemento){
    const bebidaClicada = document.querySelector(".borda-verde");

    if (bebidaClicada !== null){
        bebidaClicada.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");
    
}

function selecionarSobremesa(elemento){
    const sobremesaClicada = document.querySelector(".borda-verde");

    if (sobremesaClicada !== null){
        sobremesaClicada.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");
    
}

function ativarBotao(elemento)