let Tenis = {
    tamanho: 39,
    estoque: true,
};

let Sapato = {
    marca: "Nike",
    cor: "preto",
}

function cloneObject(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// Todos os clones estão ficando rasos, ou seja, criando somente referencias de memoria.
/* 
let clone = Tenis;
console.log(1, clone);
console.log(2, Tenis);

let mescla = Object.assign(Tenis, Sapato);
let mesclaSpread = { ...Tenis, ...Sapato };

clone.estoque = false;
mescla.cor = "ROSA";

console.log(3, clone);
console.log(4, Tenis);
console.log(5, mescla);
console.log(6, mesclaSpread);  
*/

let clone = JSON.parse(JSON.stringify(Tenis));

console.log(1, clone);
console.log(2, Tenis);

let mesclar = Object.assign(
    cloneObject(Tenis),
    cloneObject(Sapato),
);

let mesclarSpread = {
    ...cloneObject(Tenis),
    ...cloneObject(Sapato),
};

clone.estoque = false;
mesclar.cor = "ROSA";

console.log(3, clone);
console.log(4, Tenis);
console.log(5, mesclar);
console.log(6, mesclarSpread); 