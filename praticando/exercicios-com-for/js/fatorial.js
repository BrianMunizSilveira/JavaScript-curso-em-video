
function calcularFatorial() {
    let numero = document.getElementById("fatorialNumero").value;
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i
    }
    document.getElementById("fatorialOutput").innerHTML = `O fatorial de ${numero} é: <br /> <br /> ${fatorial}`;
}