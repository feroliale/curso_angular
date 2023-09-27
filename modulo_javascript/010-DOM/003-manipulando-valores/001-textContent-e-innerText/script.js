"use-strict";

const p = document.querySelector("p");

console.log(p.textContent);
console.log(p.innerText);

// p.textContent = "Nome de Gente"; // Vem com as formatações do HTML e não aceita tags
p.innerText = "<strong>Nome de Gente</strong>"; // Vem sem as formatações do HTML e não aceita tags
