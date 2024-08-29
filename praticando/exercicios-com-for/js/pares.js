function mostrarPares() {
    let resultado = "";

    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) {
            resultado += i + " ";
        }
    }

    document.getElementById("paresOutput").innerHTML = "Números pares de 1 a 50: <br /> <br />" + resultado;
} 
