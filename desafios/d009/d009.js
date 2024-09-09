/**
 * Reajusta o salário de um funcionário.
 * Essa fun o pega o nome do funcionário, o salário atual e o percentual de reajuste
 * e calcula o novo salário. O resultado é exibido no HTML na section#res.
 */
function reajuste() {
    let res = document.getElementById('res');
    let nome = prompt('Olá!, Qual é o nome do funcionário?');
    let salarioAtual = Number(prompt(`Entendido, qual é o salário atual de ${nome}?`));
    let porcentagemReajuste = Number(prompt(`Okay, o salário de ${nome} é de R$${salarioAtual} e ele vai ser reajustado em qual porcentagem?`));

    
    let aumento = salarioAtual * (porcentagemReajuste / 100);
    let novoSalario = salarioAtual + aumento;


    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`;
    res.innerHTML += `<p>O salário atual era R$${salarioAtual.toFixed(2)}.</p>`;
    res.innerHTML += `<p>Com um aumento de ${porcentagemReajuste}%, o salário vai aumentar R$${aumento.toFixed(2)} no próximo mês.</p>`;
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar R$${novoSalario.toFixed(2)}.</p>`;
}
