function reajuste() {
    // Obtém o elemento HTML onde o resultado será exibido
    let res = document.getElementById('res');

    // Solicita o nome do funcionário
    let nome = prompt('Olá!, Qual é o nome do funcionário?');

    // Solicita o salário atual e converte a entrada para número
    let salarioAtual = Number(prompt(`Entendido, qual é o salário atual de ${nome}?`));

    // Solicita a porcentagem de reajuste e converte a entrada para número
    let porcentagemReajuste = Number(prompt(`Okay, o salário de ${nome} é de R$${salarioAtual} e ele vai ser reajustado em qual porcentagem?`));

    // Calcula o valor do aumento com base na porcentagem fornecida
    let aumento = salarioAtual * (porcentagemReajuste / 100);

    // Calcula o novo salário somando o aumento ao salário atual
    let novoSalario = salarioAtual + aumento;

    // Exibe o resultado formatado no elemento HTML
    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`;  // Título com o nome do funcionário
    res.innerHTML += `<p>O salário atual era R$${salarioAtual.toFixed(2)}.</p>`;  // Exibe o salário anterior
    res.innerHTML += `<p>Com um aumento de ${porcentagemReajuste}%, o salário vai aumentar R$${aumento.toFixed(2)} no próximo mês.</p>`;  // Exibe o valor do aumento
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$${novoSalario.toFixed(2)}.</p>`;  // Exibe o novo salário após o reajuste
}
