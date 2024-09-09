function calcular() {
    // Coletando os valores e convertendo para números
    let a = Number(prompt('Qual é o valor de a?'));
    let b = Number(prompt('Qual é o valor de b?'));
    let c = Number(prompt('Qual é o valor de c?'));
    var res = document.getElementById('res');

    // Calculando o delta
    var delta = (b * b) - (4 * a * c);

    res.innerHTML = `<h2>Resolvendo Bhaskara</h2>`;

    // Exibindo a equação
    res.innerHTML += `<p>A equação atual é: ${a}x<sup>2</sup> + ${b}x + ${c} = 0</p>`;

    // Exibindo o cálculo de Δ com o b<sup>2</sup> corrigido
    res.innerHTML += `<p>O cálculo realizado será Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p>`;
    res.innerHTML += `<p>O valor calculado foi Δ = ${delta}</p>`;

    // Verificando o valor de Δ
    if (delta < 0) {
        res.innerHTML += `<p>Como Δ é negativo (${delta}), a equação não possui raízes reais.</p>`;
    } else {
        // Calculando as raízes
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);

        // Exibindo as raízes
        res.innerHTML += `<p>As raízes da equação são:</p>`;
        res.innerHTML += `<p>x<sub>1</sub> = ${x1.toFixed(2)}</p>`;
        res.innerHTML += `<p>x<sub>2</sub> = ${x2.toFixed(2)}</p>`;
    }
}
