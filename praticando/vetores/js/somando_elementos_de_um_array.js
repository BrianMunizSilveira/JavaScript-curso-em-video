let numeros = [5, 15, 12, 23]; 
/* 
 Criando um array que tem como valores [5, 15, 12, 23], 
 sendo o índice 0 o 5, índice 1 o 15, índice 2 o 12 e índice 3 o 23.
*/

let soma = numeros.reduce(function(total, numero) {
    /* 
       A função de callback recebe dois argumentos: 'total' (o acumulador) e 'numero' (o elemento atual do array).
       A cada iteração, 'total' é atualizado com a soma do valor acumulado e o valor atual 'numero'.
    */
    return total + numero;
    // Retorna a soma do acumulador e do elemento atual.
}, 0); // O valor inicial do acumulador é 0.

console.log(soma); // Exibe a soma total dos elementos do array 'numeros', que é 55.
