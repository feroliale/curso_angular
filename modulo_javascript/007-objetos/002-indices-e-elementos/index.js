// Utilizando o short name podemos enxugar as funções utilizando o mesmo nome passado no paramentro como retorno.
/* function Tenis(tamanho, estoque, preco) {
    return {
        tamanho,
        estoque,
        preco,
    };
}

console.log(Tenis(39, 10, "R$ 100")); */

// Podemos utiilizar short name com variaveis e constantes
/* const tamanho = 39;
const estoque = true;
const preco = "R$ 99,90";

const Tenis = {
    tamanho,
    estoque,
    preco,
}

console.log(Tenis); */

// Podemos utilizar short names também em métodos

const Tenis = {
    getTamanho: function () { }, // amaneira tradicional de definir

    getSize() { } // maneira short de deifinir métodos
}