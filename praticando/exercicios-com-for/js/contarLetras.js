function contarLetras () {
    let string = document.getElementById("textoString").value;
    let letra = document.getElementById("letraEspecifica").value;
    let contagem = 0;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === letra) {
            contagem++;
        }
    }

    document.getElementById("contagemLetrasOutput").innerHTML = `A letra "${letra}" aparece ${contagem} vezes na string.`
}