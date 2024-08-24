// Solicita a cotacão do dolar
let cotacao = Number(prompt('Olá, antes de mais nada por favor, informe a cotação atual do dólar:').replace(',', '.'));
alert('Obrigado por informar! Podemos continuar agora.');

// Função que converte reais para dolar
function converter() {
    let real = Number(prompt('Quantos reais voce quer converter?').replace(',', '.'));
    
    // Converte o valor em reais para dolar
    let dolar = real / cotacao;

    // Exibe o resultado
    document.getElementById('res').innerHTML = `Com R$${real.toFixed(2).replace('.', ',')} você pode comprar US$${dolar.toFixed(2)}`;
}