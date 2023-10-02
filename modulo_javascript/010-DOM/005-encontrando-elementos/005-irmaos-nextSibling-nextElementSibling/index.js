"use strict";

const h1 = document.querySelector("h1");
const p = document.querySelector(".paragrafo");


/* IRMAOS POSTERIORES */
console.log("next sibling");

console.log(h1.nextSibling);
console.log(h1.nextElementSibling);

console.log(p.nextSibling);
console.log(p.nextElementSibling);

/* IRMAOS ANTERIORES */
console.log("previous sibling");

console.log(p.previousSibling);
console.log(p.previousElementSibling);