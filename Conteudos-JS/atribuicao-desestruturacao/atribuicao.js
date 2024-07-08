// Atribuição via Desestruturação

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = ['B', 'C', 'A'];
[a, b, c] = letras; // Atribuição via desestruturação

console.log(a, b, c);


//                0      1     2     3     4     5     6     7     8   --> Indíces 
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros; // a sintexe ...nomeVariavel serve para pegar o restante do array.

console.log(primeiroNumero, segundoNumero); // saída --> indice 0, indice 1
console.log(resto); // saída --> restante do array


// PEGANDO VALORES SALTITADOS

const compras = ['arroz', 'feijão', 'macarrão', 'tomate', 'cenoura'];
const [primeiroItem, , terceiroItem, , quintoItem] = compras;

console.log(primeiroItem, terceiroItem, quintoItem); // Saída --> Arroz, macarrão, cenoura


// ACESSANDO ARRAYS ANINHADOS

//                         0          1          2
//                      0  1  2    0  1  2    0  1  2
const numsAninhados = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(numsAninhados[0][1]); // Saída --> 2 (Acessando o indíce 0 na posição 1)

// Atribuição via desestruturação de array aninnhado

const [, [, , seis]] = numsAninhados; // Acessando o número 6 do indíce 1 dos arrays aninhados.

console.log(seis);

// Acessando de maneira mais simples

const [lista1, lista2, lista3] = numsAninhados;

console.log(lista2[2]); // saída --> número 6 do arrai do indice 1
