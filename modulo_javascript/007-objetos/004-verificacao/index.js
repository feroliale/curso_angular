const Tenis = {
    tamanho: 39,
    estoque: true,
    //marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 12345,
    n: 5,
    link: { a: "valor de A", b: { c: "valor de C" } },
};

/* if (Tenis.hasOwnProperty("marcas")) {
    console.log("Existe");
} else {
    console.log("Não existe");
} */

console.log("tamanho" in Tenis);
console.log("marcas" in Tenis);