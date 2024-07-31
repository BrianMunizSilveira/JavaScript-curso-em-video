function verificar() {
    var num = Number(document.querySelector('input#numero').value);
    var res = document.querySelector('div#res');
    res.innerHTML = `<p>O Número é <strong>${num}</strong></p>`;
    if ( num % 2 === 0) {
        res.innerHTML += `<p>O Número analisado é <strong>PAR</strong></p>`;
    } else {
        res.innerHTML += `<p>O Número analisado é <strong class="impar">ÍMPAR</strong></p>`
    }
} 