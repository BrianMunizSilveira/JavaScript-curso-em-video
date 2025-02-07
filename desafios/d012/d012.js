function calcularVariacao() {
    // Solicita os preços ao usuário
    const precoAnterior = prompt('Digite o preço anterior: ');
    const precoAtual = prompt('Digite o preço atual: ');

    // Converte para números e verifica se são validos
    const anterior = parseFloat(precoAnterior);
    const atual = parseFloat(precoAtual);

    // Validação dos valores inseridos
    if (isNaN(anterior) || isNaN(atual)) {
        document.getElementById('output').innerHTML = 'Por favor, digite valores numéricos válidos. Não são permitidos letras ou simbolos.';
        return;
    }

    // Calcula a diferença e a variação percentual
    const diferenca = atual - anterior;
    const percentual = (diferenca / anterior * 100);

    // Determina se houve aumento ou redução 
    let descricao = '';
    
    if (diferenca > 0) {
        descricao = `O produto custava R$ ${anterior.toFixed(2)} e agora custa R$ ${atual.toFixed(2)}.<br /><br />
        Hoje o produto está mais caro.<br /><br />
        O preço subiu R$ ${diferenca.toFixed(2)} em relação ao preço anterior.<br /><br />
        Uma variação de ${percentual.toFixed(2)}% pra cima.`;
    } else {
        descricao = `O produto custava R$ ${anterior.toFixed(2)} e agora custa R$ ${atual.toFixed(2)}.<br /><br />
        Hoje o produto está mais barato.<br /><br />
        O preço caiu R$ ${Math.abs(diferenca).toFixed(2)} em relação ao preço anterior.<br /><br />
        Uma variação de ${Math.abs(percentual).toFixed(2)}% pra baixo.`;
    }

    // Exibe o resultado
    document.getElementById('output').innerHTML = descricao;
}