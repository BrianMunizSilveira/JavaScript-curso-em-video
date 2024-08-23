function converter() {
    // Obtém o valor da temperatura em Celsius e converte para um número
    let num = parseFloat (prompt('Olá por favor, digite uma temperatura em °C: '));
    let res = document.querySelector('section#res');

    // Verifica se o valor digitado é um número
    if (isNaN(num)) {
        res.innerHTML = '<h2>Por favor, insira um número válido.</h2>'
        return;
    }

    // Calculando as temperaturas
    let kelvin = num + 273.15;
    let fahrenheit = (num * 1.8) + 32;

    // Exibindo os resultados
    res.innerHTML = `<h2>A temperatura de <strong style="color: #fff;"> ${num} °C</strong>, corresponde a...</h2>`
    
    res.innerHTML += `<p style="color: #fff;">${kelvin.toFixed(2)} °K (Kelvin)</p>`;
    res.innerHTML += `<p style="color: #fff;">${fahrenheit.toFixed(2)} °F (Fahrenheit)</p>` 
}