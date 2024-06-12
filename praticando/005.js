function transformarTexto(texto) {
    // Uso de .toUpperCase() e .toLowerCase()

    let maisculas = texto.toUpperCase();
    let minusculas = texto.toLowerCase();
    return {
        maisculas: maisculas,
        minusculas: minusculas
    };
}

// Testando a função
console.log(transformarTexto("Olá Mundo!"));