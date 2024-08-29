function inverterPalavra() {
    let palavra = document.getElementById("palavraReverso").value;

    let palavraReversa = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraReversa += palavra[i];
    }
    document.getElementById("reversoOutput").innerHTML = `A palavra "${palavra}" invertida é: <br /> "${palavraReversa}"`
}