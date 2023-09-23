/*
 * O que é o hoisting? 
 * O interpretador javascript maqueia a execção do script alterando a ordem de execução, priorizando
 * a declaração das funções antes de sua execução, mas isso não se aplica as arrows functions.
 */

/* FUNCTIONS X ARROW FUNCTIONS */

function minhaFuncao() {
    return "Meu retorno";
}

console.log(minhaFuncao());

const minhaFuncaoArrow = () => { // Arrow function com mais de uma linha necessita do return.
    return "Meu retorno";
};

console.log(minhaFuncaoArrow());

const minhaFuncaoArroweReturn = () => "Meu retorno"; // Só é necessário o return se a arrow function possuir mais de uma linha.

console.log(minhaFuncaoArroweReturn());

//console.log(arrowFunctioHoisting()); /* Arrow function não possui hoisting! Vai dar erro.*/

const arrowFunctioHoisting = () => {
    return "Meu retorno";
};

/* ARGUMENTS */

// Não funciona arguments dentro de arrow functions
/* const nomeFuncArrowArguments = () => {
    return arguments;
};
console.log(nomeFuncArrowArguments()); */

function nomeFunctionArguments() {
    return arguments;
}

console.log(nomeFunctionArguments());

// const nomeFunctionParametos = parametro => parametro; /* Se houver somente um parametro, pode ser usado sem parenteses. */
const nomeFunctionParametos = (parametro) => parametro;

console.log(nomeFunctionParametos("oi"));

// Arrow functions não possuem construtores
function novaFuncao() {
    return console.log("Nova função");
}

new novaFuncao();

/* Ocorre erro ao executar porque arrow functions não possuem construtores
const novaArrowFunction = () => {
    return console.log("nova arrow function")
}

new novaArrowFunction(); */

/* CONTEXTO (OU ESCOPO) */
const lanches = {
    cardapio: [
        { nome: "x-bacon", preco: "R$ 15" },
        { nome: "x-frango", preco: "R$ 12" }
    ],

    meuPedido: function (select) {
        return console.log(this.cardapio[select]);
    },

    meuPedidoTimeOut: function () {
        setTimeout(function () {
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000);
    },

    meuPedidoArrow: (select) => {
        this.cardapio = [
            { nome: "x-bacon", preco: "R$ 15" },
            { nome: "x-frango", preco: "R$ 12" },
        ];

        return console.log(this.cardapio[select]);
    },
};

lanches.meuPedido(1);
lanches.meuPedidoArrow(0);
lanches.meuPedidoTimeOut();