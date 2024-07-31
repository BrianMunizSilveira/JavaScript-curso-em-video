function calcular() {
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    var operacao = document.getElementById('operacao').value;
    var res = document.getElementById('res');
    var resultado;

    if (operacao === 'add') {
        resultado = num1 + num2;
    } else if (operacao === 'sub') {
        resultado = num1 - num2;
    } else if (operacao === 'mul') {
        resultado = num1 * num2;
    } else if (operacao === 'div') {
        resultado = num1 / num2;
    }

    res.innerHTML = `<p>O resultado da operação é <strong>${resultado}</strong></p>`;
}