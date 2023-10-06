// TUPLA
let array1: [string, string, number, boolean] = [
    "Teste",
    "Novo teste",
    123,
    true
];

let array2: Array<string | number | boolean> = [
    "Teste",
    "Teste",
    123,
];

console.log(array1);
console.log(array2);

let obj1: {
    nome: string,
    sobrenome: string,
    idade: number,
    status: boolean,
} = {
    nome: "Zé",
    sobrenome: "da Poica",
    idade: 10,
    status: true,
};

console.log(obj1);

let obj2: Array<{
    nome: string,
    sobrenome: string,
    idade: number,
    status: boolean,
}> = [{
    nome: "João",
    sobrenome: "da Poica",
    idade: 10,
    status: true,
}];

