let precoPrato;
let nomePrato;

let precoBebida;
let nomeBebida;

let precoSobremesa;
let nomeSobremesa;

let valorTotal;

function transformarNumero(preco){
    preco = preco.replace("R$ ", " ");

    preco = Number(preco) * 100;
    return preco;
}

function selecionarPrato(elemento){
    const pratoClicado = document.querySelector(".comidas .borda-verde");

    if (pratoClicado !== null){
        pratoClicado.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");

    
    nomePrato = elemento.querySelector(".opcao-titulo").innerHTML;
    let preco = elemento.querySelector(".preco").innerHTML;
    precoPrato = transformarNumero(preco);

    console.log(preco);
    console.log(nomePrato);

    fecharPedido();    
}

function selecionarBebida(elemento){
    const bebidaClicada = document.querySelector(".bebidas .borda-verde");

    if (bebidaClicada !== null){
        bebidaClicada.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");

    nomeBebida = elemento.querySelector(".opcao-titulo").innerHTML;
    let preco = elemento.querySelector(".preco").innerHTML;
    precoBebida = transformarNumero(preco);
    
    console.log(preco);
    console.log(nomeBebida);

    fecharPedido();
    
}

function selecionarSobremesa(elemento){
    const sobremesaClicada = document.querySelector(".sobremesas .borda-verde");

    if (sobremesaClicada !== null){
        sobremesaClicada.classList.remove("borda-verde")
    }

    elemento.classList.add("borda-verde");

    
    nomeSobremesa = elemento.querySelector(".opcao-titulo").innerHTML;
    let preco = elemento.querySelector(".preco").innerHTML;
    precoSobremesa = transformarNumero(preco);

    console.log(preco);
    console.log(nomeSobremesa);

    fecharPedido();
}

function fecharPedido(elemento){
    let comidaSelecionada = document.querySelector(".comidas .borda-verde");

    let bebidaSelecionada = document.querySelector(".bebidas .borda-verde");
    
    let sobremesaSelecionada = document.querySelector(".sobremesas .borda-verde");

    if(comidaSelecionada && bebidaSelecionada && sobremesaSelecionada !== null){
        const finalizarPedido = document.querySelector(".final-pagina");
        finalizarPedido.classList.remove("terminar-pedido");
        finalizarPedido.innerHTML = `<div class="fechar-pedido" onclick = "confirmarPedido()">
        <p>Fechar pedido</p>
    </div>`
    }
}

function confirmarPedido(elemento){
    const valorTotal = precoPrato + precoBebida + precoSobremesa;

    const mensagem = `Olá, gostaria de fazer o pedido:\n- Prato: ${nomePrato}\n- Bebida: ${nomeBebida}\n- Sobremesa: ${nomeSobremesa}\nTotal: R$ ${(valorTotal/100).toFixed(2)}`

    const whatsapp = `https://wa.me/5562982099146?text=${encodeURIComponent(mensagem)}`;

    window.open(whatsapp);

}
