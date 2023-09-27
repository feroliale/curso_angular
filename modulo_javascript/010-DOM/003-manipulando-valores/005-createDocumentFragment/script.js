"use-strict";

const ul = document.querySelector("ul");
const fragment = document.createDocumentFragment(); // Fragmento do DOM que pode ser usado para salvar elementos temporariamente (ao meu controle)

const lanches = ["Lanche 1", "Lanche 2", "Lanche 3", "Lanche 4"];

lanches.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element;
    fragment.append(li); // adiciono todos os itens da lista ao meu fragment para depois enviar de uma unica vez ao DOM
});

ul.append(fragment); // aqui eu envio o fragment ao DOM