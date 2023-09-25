/* 
let arr = [1, 2, 3, 4, 5];

console.table(arr);

console.log("shift =>", arr.shift());
console.log("pop =>", arr.pop());

console.table(arr);
 */

let arr = [
    { nome: "Pessoa1", tel: "(99) 8877 6655" },
    { nome: "Pessoa2", tel: "(99) 8877 6655" },
    { nome: "Pessoa3", tel: "(99) 8877 6655" },
    { nome: "Pessoa4", tel: "(99) 8877 6655" },
    { nome: "Pessoa5", tel: "(99) 8877 6655" },
];

console.table(arr);

/* 
const newArr = arr.slice(1, 3); //SLICE COPIA O INDICE DO ARRAY

console.table(newArr); 

*/

console.log("Removendo os seguintes itens: ", arr.splice(1, 3)); // REMOVE O INDICIE DO ARRAY

console.table(arr);