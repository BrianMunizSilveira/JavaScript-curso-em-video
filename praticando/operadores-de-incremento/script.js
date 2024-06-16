let x = 5;

console.log('Pós-incremento:', x++); // 5
console.log('Valor de x após pós-incremento:', x); // 6

x = 5; // Resetando o valor de x

console.log('Pré-incremento:', ++x); // 6
console.log('Valor de x após pré-incremento:', x); // 6

// Exercício Simples de Incremento

let num = 5;
console.log('Valor inicial de num:', num); // 5
num++;
console.log('Valor de num após pós-incremento:', num); // 6

// Combinação de Incremento com Outras Operações

let a = 10; // 'a' é inicializado com 10
let b = a++; // 'b' recebe o valor de 'a' (10), depois 'a' é incremetnado para 11
console.log('Valor de a após pós-incremento:', a); // 11
console.log('Valor de b após atribuição de a++', b); // 10

// Uso de Pré-incremento e Pós-incremento em Expressões

let xis = 3;
let y = ++x; // y = 4, xis = 4
let z = x++; // z = 4, xis = 5
console.log('Valor de xis após pré-incremento e pós-incremento;', x); // 5
console.log('Valor de y após pré-incremento:', y); // 4
console.log('Valor de z pós-incremento:', z); // 4

// Exercício de reforço

let m = 7;
let n = m++;
console.log('Valor de m após pós-incremento:', m); // 8
console.log('Valor de n após atribuição em m++:', n); // 7 