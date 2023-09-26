"use-strict";

const p = document.getElementsByClassName("paragrafo");

console.log(p);

// ForEach não funciona com HTML collection, por isso usa-se o for..of 
for (let element of p) {
    element.style.background = "red";
    element.style.color = "#FFF";
    console.log(element);
}