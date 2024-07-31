/*
4. Condições Compostas

Exercício 4: Crie um programa que pergunte ao usuário três notas de um aluno e calcule a média. Verifique se o aluno foi aprovado, em recuperação ou reprovado. A regra é:

Média maior ou igual a 7: Aprovado
Média entre 5 e 7 (exclusivo): Recuperação
Média menor que 5: Reprovado
*/

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 5 && media < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}
