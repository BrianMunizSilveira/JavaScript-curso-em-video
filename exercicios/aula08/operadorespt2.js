function primeiroex() {
    let num1 = parseInt(prompt("Digite o primeiro número:"));
    let num2 = parseInt(prompt("Digite o segundo número:"));

    let ambosMaioresQue10 = (num1 > 10) && (num2 > 10);
    let peloMenosUmPar = (num1 % 2 === 0) || (num2 % 2 === 0);

    alert(`Ambos os números são maiores que 10? ${ambosMaioresQue10}`);
    alert(`Pelo menos um dos números é par? ${peloMenosUmPar}`);

    console.log(`Ambos os números são maiores que 10? ${ambosMaioresQue10}`);
    console.log(`Pelo menos um dos números é par? ${peloMenosUmPar}`);
}

function segundoex() {
    let valor1 = '10';
    let valor2 = 10;

    alert(`valor1 == valor2: ${valor1 == valor2}`); // true
    alert(`valor1 === valor2: ${valor1 === valor2}`); // false
}

function terceiroex() {
    let a = 5;
    let b = 10;
    let c = 15;

    alert(a + b * c); // 155, porque a multiplicação é avaliada primeiro
    alert((a + b) * c); // 255, por que a expressão entre parêntese é avaliada primeiro
    alert(a + b > c); // false, porque a adição e avaliada antes da comparação
    alert(a < b && b < c); // true, porque ambas as comparações são verdadeiras
}

function quartoex() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let status = (idade >= 18) ? 'Você é maior de idade.' : 'Você é menor de idade.';
    
    alert(status);
}