"use-strict";

const input = document.querySelector("#nome");

console.log(input.value);

setTimeout(() => {
    input.value = "Zé da Poica";
    console.log(input.value);
}, 2000);