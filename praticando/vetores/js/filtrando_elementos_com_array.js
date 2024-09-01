let numeros = [1, 4, 7, 10, 13, 16, 20];
/* 
 Criando o array 'numeros' com os valores [1, 4, 7, 10, 13, 16, 20].
 Estes são os elementos do array, onde 1 é o elemento no índice 0, 
 4 é o elemento no índice 1, e assim por diante, até 20 que é o elemento no índice 6.
*/

let maioresQueDez = numeros.filter(function (numero) {
    /* 
     Criando um novo array 'maioresQueDez' que será preenchido com os elementos do array 'numeros' 
     que atendem à condição definida na função de callback fornecida ao método 'filter()'.
     O método 'filter()' percorre cada elemento do array 'numeros' e aplica a função fornecida 
     para determinar se o elemento deve ser incluído no novo array 'maioresQueDez'.
    */

    return numero > 10;
    /* 
     A função verifica se o elemento atual 'numero' do array 'numeros' é maior que 10.
     Se a condição for verdadeira (numero > 10), o elemento é incluído no array 'maioresQueDez'.
     Caso contrário, o elemento é ignorado.
    */
});

console.log(maioresQueDez);
/* 
 Exibindo no console o conteúdo do array 'maioresQueDez', que contém apenas os valores do array 'numeros' que são maiores que 10. O resultado esperado é [13, 16, 20]. 
*/