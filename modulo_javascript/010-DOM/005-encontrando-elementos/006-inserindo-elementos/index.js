"use strict";

/* APPEND E APPENDCHILD 
* append: mais usado para textos
* appendChild: usado apra inserir elementos html
*/

// const container = document.querySelector(".container");

// // container.append("<strong>Olá!</strong>");

// const newDiv = document.createElement("div");
// newDiv.innerText = "NewDiv!"

// container.appendChild(newDiv);

/* INSERTBEFORE */
// const container = document.querySelector(".container");
// const paragrafo = document.querySelector(".paragrafo");

// const newH2 = document.createElement("h2");
// newH2.innerText = "Novo Subtitulo";

// container.insertBefore(newH2, paragrafo);

/* AFTER E BEFORE */
const container = document.querySelector(".container");

// container.before("<strong>textoBefore</strong>");

const textoBefore = document.createElement("strong");
textoBefore.innerText = "Texto Before.";

const textoAfter = document.createElement("strong");
textoAfter.innerText = "Texto After.";

container.before(textoBefore);
container.after(textoAfter);