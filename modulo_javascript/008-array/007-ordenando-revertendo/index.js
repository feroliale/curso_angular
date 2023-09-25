/* 
// Ordenando STRINGS
const stringArr = ["Z", "B", "C", "D", "G", "W", "L"];

console.log(stringArr.sort());
console.log(stringArr.reverse());
 */

/* 
// Ordenando números
const numArr = [20, 15, 32, 55, 44, 42, 1, 3, 33, 7, 5];

// sort((a, b) => a - b)
// se retornar um valor negativo, o valor de "a" será ordenado antes de "b".
// se retornar 0, a ordenação de "a" e "b" não mudará.
// se retornar um valor positivo, o valor em "b" será ordenado antes de "a".

console.log(numArr.sort((a, b) => a - b)); // usa-se o a-b pra corrigir o erro de ordenação do primeiro número
console.log(numArr.sort((a, b) => b - a));
console.log(numArr.sort((a, b) => a - b).reverse());
 */

const objArr = [
    {
        nome: "Pessoa",
    },
    {
        nome: "Alguém",
    },
    {
        nome: "Fulano",
    },
    {
        nome: "Beltrano",
    },
    {
        nome: "Coisinha",
    },
];

console.log(objArr.sort((a, b) => a.nome.localeCompare(b.nome))); // o localeCompare converte a string em valor e compara qual a maior
console.log(objArr.sort((a, b) => a.nome.localeCompare(b.nome)).reverse()); 