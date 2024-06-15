function clicou() {
    let nome = prompt('Qual é seu nome?');
    let idade = prompt(`Olá ${nome}! Quantos anos você tem?`);
    let mensagem = `Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`;

    alert(mensagem);
    return mensagem;
}

let resultado = clicou();
console.log(resultado);