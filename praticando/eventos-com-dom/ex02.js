var contador = 0;

function incrementar() {
    contador++;
    var textoResultado = 'Cliques: ' + contador;
    if (contador > 0) {
        textoResultado += '  😎';
    }
    document.getElementById('resultado').innerText = textoResultado;
    if (contador > 9) {
        textoResultado += '  👀';
    }
    document.getElementById('resultado').innerText = textoResultado;
}