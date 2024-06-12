function saudar(nome, sobrenome) {
    // Concatenação usando placeholders

    let saudacao = `Olá, ${nome} ${sobrenome}!`
    return saudacao;
}

const nome = "João";
const sobrenome = "Silva";

let mensagem = saudar(nome, sobrenome);

console.log(mensagem)