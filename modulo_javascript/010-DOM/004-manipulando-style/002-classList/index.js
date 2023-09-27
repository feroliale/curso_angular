"use strict";

const h1 = document.querySelector("h1");

h1.classList.remove('titulo');
h1.classList.add('active', 'blue-filter');
// h1.classList.add('blue-filter');

if (h1.classList.contains("active")) {
    // alert("Existe a classe active!");
}

h1.classList.toggle('blue-filter'); // ativa se estiver desativado e desativa se estiver ativado