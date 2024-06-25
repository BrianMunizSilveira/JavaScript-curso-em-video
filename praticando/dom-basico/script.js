function clicou() {
    let titulo = prompt('Qual vai ser o seu título?');
    let resultado = document.getElementsByTagName('h1')[0];

    resultado.innerHTML = `<h1>${titulo}</h1>`;

    let paragrafo = prompt('Pensou que iria mudar apenas o título? Fala ai qual vai ser teu Parágrafo também Paizão!');
    let resultadoP = document.getElementById('texto');

    resultadoP.innerHTML = `<p>${paragrafo}</p>`;

}