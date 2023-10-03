"use strict";

const btnOnClick = document.querySelector(".onclick");

btnOnClick.onclick = function alertOne() {
    alert("Alerta vindo do script pelo evento OnClick.");
}

const btnEvent = document.querySelector(".event");

btnEvent.addEventListener('click', (event) => {
    alert("Alerta vindo do script pelo addEventListener.");
});

btnEvent.addEventListener('mouseover', (event) => {
    btnEvent.style.background = "blue";
    btnEvent.style.color = "white";
});

btnEvent.addEventListener('mouseout', (event) => {
    btnEvent.style.background = "red";
});