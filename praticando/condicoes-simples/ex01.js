function verificar() {
    var txtidade = window.document.getElementById('txtidade');
    var res = window.document.getElementById('res');
    var idade = Number(txtidade.value);
    res.innerHTML = `<p>Sua idade é <strong>${idade} anos</strong></p>`
    if (idade < 18) {
        res.innerHTML += `<p>Voce ainda é <strong class="menor">MENOR</strong> de idade.</p>`
    } else {
        res.innerHTML += `<p>Você é <strong>MAIOR</strong> de idade.</p>`
    }
}