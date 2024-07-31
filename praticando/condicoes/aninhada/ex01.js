/*
Condições Aninhadas: Crie um programa que pergunte a idade do usuário e se ele possui experiência em programação. 

Se for menor de idade, exiba uma mensagem dizendo que ele deve estudar mais. Se for maior de idade, pergunte quantos anos de experiência ele tem. 

Se tiver mais de 5 anos de experiência, exiba uma mensagem dizendo que ele é um desenvolvedor sênior, caso contrário, diga que ele é um desenvolvedor júnior.
*/

let idade = Number(prompt("Qual sua idade?"));
let temExperiencia = prompt("Tem experiencia na area de programação? (sim/nao)");

if (idade < 18) {
    console.log('Você deve estudar mais.');
} else {
    if (temExperiencia.toLowerCase() === 'sim') {
        let anosExperiencia = Number(prompt("Quantos anos de experiencia você tem?"));
        if (anosExperiencia > 5) {
            console.log('Você é desenvolvedor Sênior.');
        } else {
            console.log('Você é desenvolvedor Júnior.'); 
        }
    } else {
        console.log('Você deve ganhar mais experiencia na area de programação.');
    }
}
