/*
Condições Compostas e Aninhadas: Crie um programa que pergunte ao usuário o seu salário e o número de dependentes. Se o salário for menor ou igual a R$ 2000 e o número de dependentes for maior que 2, exiba uma mensagem dizendo que ele tem direito a um benefício social. Caso contrário, exiba uma mensagem dizendo que ele não tem direito ao benefício.
*/

let salario = Number(prompt("Digite seu salário:"));
let dependentes = Number(prompt("Digite o número de dependentes:"));

if (salario <- 2000) {
    if (dependentes > 2) {
        console.log('Tem direito a um beneficio social.');
    } else {
        console.log('Não tem direito ao beneficio.');
    }
} else {
    console.log('Não tem direito ao beneficio.');
}