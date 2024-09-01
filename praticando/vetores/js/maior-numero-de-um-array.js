let numeros = [3, 7, 2, 5, 8]
/*
 A variável composta (vetor/array) 'numeros' recebe os valores 3, 7, 2, 5, 8, onde 3 é o elemento no índice 0, 7 é o elemento no índice 1, e assim por diante até 8, que corresponde ao elemento no índice 4. 
*/

let maior = numeros[0]
/* 
 A variavel 'maior' é inicializada com o valor do primeiro elemento do array, que está no índice 0. Neste caso, 'maior' começa com o valor 3. 
*/

for (let i = 1; i < numeros.length; i++)
/* 
 Para a variável 'i', que se inicia com 1, enquanto 'i' for menor que o comprimento do array 'numeros' execute o bloco de código e, após cada iteração, incremente o valor de 'i' em 1.
*/ {
    if (numeros[i] > maior)
        /* Se o elemento atual do array 'numeros' (ou seja, numeros[i]) for maior que o valor atual da variável 'maior', */ 
        {
        maior = numeros[i] 
        /* então atualize o valor de 'maior' para esse elemento.*/
    }
}

console.log("O maior numero é:", maior)
/* Exibe no console o valor armaenado na variável 'maior', que ao final do loop será o maior número presente no array 'numeros'. */