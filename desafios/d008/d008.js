// Função para calcular o desconto
function desconto () {
    let res = document.getElementById("res")
    let produto = prompt("Qual é o produto que você está comprando?")
    let preco = prompt(`Qual é o preço de ${produto}?`)
    // Calcula o desconto
    let desconto = (preco * 10) / 100;  
    
    // Exibe o resultado
    res. innerHTML = `<h3>Calculando desconto de 10% para ${produto}</h3>`;
    res.innerHTML += `<p>O preço original era de R$${preco}.</p>`;
    res.innerHTML += `<p>Você acaba de ganhar R$${desconto} (-10%).</p>`;
    res.innerHTML += `<p>No fim, você vai pagar R$${preco - desconto}, no produto ${produto}.</p>`
}

