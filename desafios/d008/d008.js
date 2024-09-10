// Função para calcular o desconto
function desconto() {
    let res = document.getElementById("res")
    let produto = prompt("Qual é o produto que você está comprando?")
    let preco = prompt(`Qual é o preço de ${produto}?`)
    // Calcula o desconto
    let desconto = (preco * 10) / 100;

    // Exibe o resultado
    res.innerHTML = `<h3>Calculando desconto de 10% para ${produto}</h3>`;
    res.innerHTML += `<p>O preço original era de R$${preco}.</p>`;
    res.innerHTML += `<p>Você acaba de ganhar R$${desconto} (-10%).</p>`;
    res.innerHTML += `<p>No fim, você vai pagar R$${preco - desconto}, no produto ${produto}.</p>`
    res.innerHTML += `<footer>
        <p>Made with &#X2764;&#XFE0F; by <a href="https://github.com/BrianMunizSilveira" target="_blank" rel="external">Brian Muniz Silveira</a> | Desafio realizado no dia 24/08/2024 &#X2705;.</p>
    </footer>`
}

