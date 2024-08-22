function converter() {
    let num = prompt('Olá por favor, digite um valor em metros(m): ');
    let res = document.querySelector('section#res');

    res.innerHTML = `<h2>A distancia de <strong style="color: #fff;"> ${num} metros</strong>, corresponde a...</h2>`

    res.innerHTML += `<p style="color: #fff;">${num / 1000} Quilômetros (Km)</p>`
    res.innerHTML += `<p style="color: #fff;">${num / 100} Hectômetros (Hm)</p>`
    res.innerHTML += `<p style="color: #fff;">${num / 10} Decâmetros (Dam)</p>`
    res.innerHTML += `<p style="color: #fff;">${num * 10} Decímetros (dm)</p>`
    res.innerHTML += `<p style="color: #fff;">${num * 100} Centímetros (cm)</p>`
    res.innerHTML += `<p style="color: #fff;">${num * 1000} Milímetros (mm)</p>`
}