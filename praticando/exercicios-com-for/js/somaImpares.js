function somaImpares() {
    // Capturando o valor fornecido pelo usuário.
    let limite = document.getElementById("somaImparesLimite").value;

    // Convertendo para número.
    limite = parseInt(limite, 10);

    // Verifica se o valor inserido é um número válido.
    if (isNaN(limite) || limite < 1) {
        document.getElementById("somaImparesOutput").innerHTML = "Por favor, insira um número válido maior que 0.";
        return;
    }

    let soma = 0;

    // Calcula a soma dos números ímpares.
    for (let i = 1; i <= limite; i += 2) {
        soma += i;
    }

    // Exibe o resultado.
    document.getElementById("somaImparesOutput").innerHTML = `Soma dos ímpares até ${limite}: <br /><br /> ${soma}`;
}
