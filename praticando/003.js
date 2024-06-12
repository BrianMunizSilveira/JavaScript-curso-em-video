function numeroParaString(numero) {
    // Conversão de Number para String e uso de PlaceHolders
    let numeroStr = String(numero);
    return `O número é: ${numeroStr}`
}

// Teste de função
console.log(numeroParaString(123)); //Deve retornar "O número é: 123"