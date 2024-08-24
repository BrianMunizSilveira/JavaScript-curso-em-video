// Solicita a cotação do dólar
let cotacao = Number(prompt('Olá, antes de mais nada por favor, informe a cotação atual do dólar:').replace(',', '.'));

// Função para obter a saudação com base na hora do dia
function obterSaudacao() {
    let agora = new Date();
    let hora = agora.getHours();

    if (hora >= 0 && hora < 12) {
        return 'Bom dia';
    } else if (hora >= 12 && hora < 18) {
        return 'Boa tarde';
    } else {
        return 'Boa noite';
    }
}

// Exibe a saudação ao usuário
alert(obterSaudacao() + '! Vamos prosseguir com a conversão.');

// Função que converte reais para dólar
function converter() {
    let real = Number(prompt('Quantos reais você quer converter?').replace(',', '.'));
    
    // Converte o valor em reais para dólar
    let dolar = real / cotacao;

    // Exibe o resultado
    document.getElementById('res').innerHTML = `Com R$${real.toFixed(2).replace('.', ',')} você pode comprar US$${dolar.toFixed(2)}`;
}
