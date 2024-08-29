function ordemDecrescente () {
    let numero = document.getElementById("ordemNumero").value;
    numero = parseInt(numero, 10); 

    let resultado = "";
    for (let i = numero; i >= 1; i--) {
        resultado += i + " ";
    }

    document.getElementById("ordemOutput").innerHTML = `Números em ordem decrescente: <br /><br /> ${resultado}`;
}