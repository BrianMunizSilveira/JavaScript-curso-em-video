/*
Condições Múltiplas: Crie um programa que pergunte ao usuário um mês (número de 1 a 12) e exiba o nome do mês correspondente. Use um switch para implementar isso.
*/ 

let mes = Number(prompt("Digite um númerod e 1 a 12 para o mês:"));

switch (mes) { 
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;          
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default:
        console.log("Número inválido. Digite um número de 1 a 12.");
}
