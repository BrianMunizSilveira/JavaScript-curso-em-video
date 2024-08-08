var soma = 0;
var numero;

do {
    numero = parseInt(prompt("Digite um numero (0para sair): "), 10);
    soma += numero;
} while (numero != 0);
alert(`A soma de todos os números é: ${soma}`);
