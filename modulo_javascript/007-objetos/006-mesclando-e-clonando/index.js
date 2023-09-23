let Tenis = {
    tamanho: 39,
    estoque: true,
};

let Sapato = {
    marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    cor: "preto",
}

let clone = Tenis;
console.log("LOG CLONE", clone);

let mescla = Object.assign(Tenis, Sapato);
console.log("LOG MESCLA", mescla);

let mesclaSpread = { ...Tenis, ...Sapato };
console.log("LOG SPREAD", mesclaSpread);