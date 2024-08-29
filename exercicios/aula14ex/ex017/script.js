function tabuada() {
    var num = document.getElementById('num');  // Captura o elemento de input onde o usuário digita o número
    var res = document.getElementById('res');  // Captura o elemento select onde será exibida a tabuada

    if (num.value.length == 0) {  // Verifica se o campo de entrada está vazio
        alert('Por favor, digite um número! O valor não pode ser 0');  // Exibe um alerta se o campo estiver vazio
    } else {
        var n = Number(num.value);  // Converte o valor digitado para número
        var c = 1;  // Inicia o contador de multiplicações com 1
        res.innerHTML = '';  // Limpa qualquer resultado anterior na lista de tabuada

        while (c <= 10) {  // Enquanto o contador for menor ou igual a 10
            var item = document.createElement('option');  // Cria um novo elemento <option> para adicionar na lista
            item.text = `${n} x ${c} = ${n * c}`;  // Define o texto do item com o resultado da multiplicação
            item.value = `tab${c}`;  // Define um valor para o item (não essencial, mas pode ser útil)
            res.appendChild(item);  // Adiciona o item como uma nova opção dentro do <select> 'res'
            c++;  // Incrementa o contador
        }
    }
}
