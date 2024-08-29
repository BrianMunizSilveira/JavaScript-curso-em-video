function exibirFibonacci() {
    let limite = document.getElementById("fibonacciLimite").value;
    limite = parseInt(limite, 10); // Convertendo para número.

    let fibonacci = [0, 1];

    // Gerando a sequencia de Fibonacci.
    while (true) {
        let proximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (proximo > limite) break;
        fibonacci.push(proximo);
    }

    // Exibindo o resultado.
    document.getElementById("fibonacciOutput").innerHTML = `Sequencia de Fibonacci até ${limite}: <br /> <br /> ${fibonacci.join(', ')}`;
}