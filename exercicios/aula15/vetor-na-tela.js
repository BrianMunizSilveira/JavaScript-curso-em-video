let valores = [8, 1, 7, 4, 2, 9];

valores.sort(); // Organiza por ordem crescente os valores
console.log(valores); // Exibe os valores já em ordem crescente

/* MANEIRA NADA RECOMENDADA ↓↓↓↓*/

/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
*/

/* FUNCIONADA MAS, EXISTE UMA MANEIRA OTIMIZADA E SIMPLIFICADA ↓↓↓↓*/

/*
for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição do ${pos} tem o valor ${valores[pos]}`)
}
*/

/* MANEIRA RECOMENDADA ↓↓↓↓*/

for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}
