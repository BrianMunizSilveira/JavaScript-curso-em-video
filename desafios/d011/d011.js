function verificar() {
    // Obtém o elemento HTML onde o resultado será exibido
    let res = document.getElementById('res');

    // Solicita ao usuário o ano que deseja verificar
    let ano = prompt('Olá, qual é o ano que você quer verificar?');

    // Exibe uma mensagem inicial analisando o ano inserido
    res.innerHTML = `<h2>Analisando o ano de ${ano}.</h2>`;

    // Verifica se o ano é bissexto utilizando a regra de divisibilidade:
    // - O ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400
    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
        // Se o ano for bissexto, exibe uma mensagem indicando que o ano é bissexto
        // O texto é marcado com um fundo azul-claro (usando <mark>) e um ícone de "check" (✓)
        res.innerHTML += `<p>O ano de ${ano} <mark style="background-color: #7dffff; font-weight: bold; padding: 4px;">é bissexto</mark> \u{2705}</p>`;
    } else {
        // Se o ano não for bissexto, exibe uma mensagem indicando que o ano não é bissexto
        // O texto é marcado com um fundo vermelho (usando <mark>) e um ícone de "X" (✗)
        res.innerHTML += `<p>O ano de ${ano} <mark style="background-color: #ff7a7a; font-weight: bold; padding: 4px;">não é bissexto</mark> \u{274C}</p>`;
    }

    // Créditos ao autor do código
    res.innerHTML += `<footer>
                        <p>Made with &#X2764;&#XFE0F; by <a href="https://github.com/BrianMunizSilveira" target="_blank"
                        rel="external">Brian Muniz Silveira</a> | Desafio realizado no dia 10/09/2024 &#X2705;.</p>
                      </footer>`;
}
