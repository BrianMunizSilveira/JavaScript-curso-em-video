/* var nome = window.prompt('Qual é seu nome?')

document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras. <br />`)

document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()} <br />`)

document.write(`Seu nome em minuscúlas é ${nome.toLowerCase()} <br />`) */

var nome = prompt("Qual é o seu nome e sobrenome?");

var idade = prompt("Qual sua idade?");

document.write(
  `Olá, <strong>${nome}</strong>!. Seu nome tem ${nome.length} letras. <br />E a sua idade é ${idade}`
);
