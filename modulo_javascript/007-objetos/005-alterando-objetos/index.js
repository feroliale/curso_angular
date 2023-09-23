let Tenis = {
    tamanho: 39,
    estoque: true,
};

console.log(Tenis);

Tenis.tamanho = 40;
Tenis["preco"] = 90;
Tenis.cor = "preto";

console.log(Tenis);
console.log(Tenis["cor"]);

delete Tenis.cor;
console.log(Tenis["cor"]);

Tenis.cor = "branco";
console.log(Tenis["cor"]);