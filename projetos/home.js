
function rolarParaDestino(contato) {
    var elementoDestino = document.getElementById(contato);

    if (elementoDestino) {
        elementoDestino.scrollIntoView({ behavior: 'smooth' }); // Rolagem suave
        
    }   
}