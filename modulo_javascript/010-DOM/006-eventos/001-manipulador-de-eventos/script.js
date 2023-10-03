"use strict";

const btnOnClick = document.querySelector(".onclick");
const btnEvent = document.querySelector(".event");
const btnRemove = document.querySelector(".remove");
const body = document.querySelector("body");
const h3 = document.querySelector("h3");
const link = document.querySelector("a");
const acionarAlert = () => {
    let validador = false;

    alert("Alert do RemoveEventListenner");

    validador = true;

    if (validador) {
        btnRemove.removeEventListener("click", acionarAlert);
    }
};

btnOnClick.onclick = function alertOne() {
    alert("Alerta do evento OnClick.");
}

btnEvent.addEventListener("mouseover", (event) => {
    body.style.background = "blue";
});

btnEvent.addEventListener("mouseout", (event) => {
    body.style.background = "#FFF";
});

btnEvent.addEventListener("click", (event) => {
    alert("Alerta do EventListenner");
});

btnRemove.addEventListener("click", acionarAlert);

link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("Evento prevenido!");
});

const menu = document.querySelector("#menu");

menu?.addEventListener("click", (event) => {
    const { target } = event;
    const pd = document.querySelector(".preventing-default");

    switch (target.getAttribute("class")) {
        case "home":
            pd.style.background = "red";
            break;

        case "sobre":
            pd.style.background = "blue";
            break;

        case "contato":
            pd.style.background = "orange";
            break;

        default:
            break;
    }
});









