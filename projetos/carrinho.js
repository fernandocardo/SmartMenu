var carrinhoDeCompras = [];
var total = 0;

function adicionarAoCarrinho(nome, preco) {
    var item = { nome: nome, preco: preco };
    carrinhoDeCompras.push(item);
    total += preco;
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    var item = carrinhoDeCompras[index];
    total -= item.preco;
    carrinhoDeCompras.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    var carrinhoConteudo = document.getElementById("carrinho-conteudo");
    var totalSpan = document.getElementById("total");

    carrinhoConteudo.innerHTML = ""; 

    carrinhoDeCompras.forEach(function (item, index) {
        carrinhoConteudo.innerHTML += `
            ${item.nome} - R$ ${item.preco.toFixed(2)} 
            <button onclick="removerDoCarrinho(${index})">Remover</button><br>
        `;
    });

    totalSpan.textContent = total.toFixed(2); 
}

function finalizarCompra() {
    alert("Compra finalizada! Total: R$" + total.toFixed(2));
    carrinhoDeCompras = [];
    total = 0;
    atualizarCarrinho();
}
function rolarParaDestino(destino) {
    var elementoDestino = document.getElementById(destino);

    if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave
    }
}

atualizarCarrinho();