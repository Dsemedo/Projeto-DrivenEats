
function selecionarPrato(elemento){
    const selecionado = document.querySelector(".opcao");

    if (selecionado !== null){
        selecionado.classList.remove("borda-verde");
    }

    elemento.classlist.add("borda-verde");    
}