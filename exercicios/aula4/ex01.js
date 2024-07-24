window.alert('Minha primeira mensagem! Olá Mundo!');
window.confirm('Esta gostando do JS?');//Janela com botão OK e Cancelar


let nome = window.prompt('Qual é seu nome?');//Vai perguntar o nome...
let idade = window.prompt('Qual é sua idade?');
let gostaDeJS = window.confirm('Você gosta de JavaScript?');

let mensagem = `Olá, ${nome}! Você tem ${idade} anos e ${gostaDeJS ? 'gosta' : 'não gosta'} de JavaScript.`;
window.alert(mensagem);