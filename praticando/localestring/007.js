function formatarNumeroLocale(numero) {
    //Uso de .toLocaleString('pt-BR')
    return numero.toLocaleString('pt-BR');
}

console.log(formatarNumeroLocale(1234567.89));