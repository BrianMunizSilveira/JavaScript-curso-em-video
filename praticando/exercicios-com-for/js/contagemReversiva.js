function contagemReversa() {
    let numero = document.getElementById("contagemNumero").value;
    numero = parseInt(numero, 10); // Convertendo em número;

    let resultado = "";

    for (let i = numero; i >= 0; i--) {
        resultado += i + " ";
    }

    document.getElementById("contagemOutput").innerHTML = `Contagem regressiva: <br /><br /> ${resultado}`;
}