"use-strict";

const div = document.querySelector("div");
// let link = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript";
// div.innerHTML = `Texto alterado via <strong><a href="${link}">Javascript</a></strong>"`;

const elementUl = document.createElement("ul");

["Primeiro", "Segundo", "Terceiro"].forEach((element) => {
    const elementLi = document.createElement("li");
    elementLi.innerText = element;
    elementUl.appendChild(elementLi);
});

div.appendChild(elementUl);