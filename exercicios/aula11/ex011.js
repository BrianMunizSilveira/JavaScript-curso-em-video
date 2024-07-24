function verificar() {
    var txtpais = window.document.getElementById('txtpais');
    var res = window.document.getElementById('res');
    var pais = (txtpais.value);
    res.innerHTML = `<p>Você nasceu no/a <strong>${pais}</strong>.</p>`
    if (pais == 'Brasil') {
        res.innerHTML += '<p>Voce é <strong class="br">Brasileiro! &#X1F1E7;&#X1F1F7;</strong></p>'
    } else {
        res.innerHTML += '<p>Voce é <strong>Estrangeiro!</strong></p>'
    }

}