function clicou() {
    let strNum1 = prompt("Digite o primeiro número:");
    let strNum2 = prompt("Digite o segundo número:")

    let num1 = parseInt(strNum1);
    let num2 = parseInt(strNum2);

    alert(`Some: ${num1 + num2}`);
    alert(`Subtração: ${num1 - num2}`);
    alert(`Multiplicação: ${num1 * num2}`);
    alert(`Divisão: ${num1 / num2}`);
}