const Tenis = {
    tamanho: 39,
    estoque: true,
    //marcas: [{ nome: "Nike" }, { nome: "Adidas" }],
    secret: 12345,
    n: 5,
    link: { a: "valor de A", b: { c: "valor de C" } },
};

// const { tamanho, estoque, marcas = "Outra" } = Tenis;

// console.log(tamanho, estoque, marcas);

// const { secret: randomNumber, n: avaliacao } = Tenis;

// console.log(secret);
// console.log(randomNumber);
// console.log(avaliacao);

// Nesting
// const { link } = Tenis;
// console.log(link);

// const { link: { a } } = Tenis;
// console.log(a);

const {
    link: {
        a,
        b: { c }
    }
} = Tenis;

console.log(c); // Isso é o mesmo que fazer:
console.log(Tenis.link.a);

