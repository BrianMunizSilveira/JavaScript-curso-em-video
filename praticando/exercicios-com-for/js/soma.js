function somar1a100() {
    let soma = 0;
    
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }

    document.getElementById('somaOutput').innerHTML = "A soma de 1 a 100 é de: " + soma;
}