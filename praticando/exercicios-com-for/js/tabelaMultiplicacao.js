function tabelaMultiplicacao() {
    let limite = document.getElementById("multiplicacaoLimite").value;
    limite = parseInt(limite, 10);

    let resultado = "";
    for (let i = 1; i <= limite; i++) {
        for (let j = 1; j <= limite; j++) {
            resultado += `${i} x ${j} = ${i * j}\n`;
        }
        resultado += "\n"; 
    }

    document.getElementById("multiplicacaoOutput").innerHTML = `Tabela de Multicação até ${limite}: <br /> \n ${resultado}`; 
}