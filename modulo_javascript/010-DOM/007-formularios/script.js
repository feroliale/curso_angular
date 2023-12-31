"use strict";

const form = document.forms.namedItem("select-checkbox");
const submit = document.querySelector('#submit');
const change = document.querySelector('#change');

let checkedValues = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    submit.innerHTML = checkedValues;
});

form.checkbox.forEach((element) => {
    element.addEventListener("change", (event) => {
        hasChecked(event, element);
        change.innerHTML = checkedValues;
    });
});

const hasChecked = (event, element) => {
    const { target } = event;

    if (target.checked) {
        return checkedValues.push(element.value);
    }

    if (!target.checked) {
        return checkedValues.map((checkedValue, index) => {
            if (element.value === checkedValue) {
                return checkedValues.splice(index, 1);
            }
        });
    }
};

/* MANIPUALNDO RADIOBUTTONS
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const radio = form.radio;


//     submit.innerHTML = radio.value;

//     // console.log(radio.value);
//     // radio.forEach((res) => {
//     //     if (res.checked) {
//     //         console.log(res);
//     //     }
//     // });
// });

// form.radio.forEach(res => {
//     res.addEventListener('change', (event) => {
//         const { target } = event;

//         if (target.checked) {
//             change.innerHTML = target.value;
//         }

//     });
// });
 */

/* MANIPULANDO INPUT
// const form = document.forms.namedItem("registration");
 
//form.addEventListener("input", (event) => {
//     event.preventDefault();

//     const name = form.name.value;

//     const newDivElement = document.createElement("div");
//     newDivElement.innerText = name.toUpperCase();

//     form.nextElementSibling.remove();
//     form.after(newDivElement);
});
 */

/* FORM E FORMDATA
// const password = form.password.value

// const formData = new FormData(form);

// formData.set("name", name);
// formData.set("password", password);

// console.log(formData.has("name"));
// console.log(formData.has("password"));

// console.log(formData.get("name"));
// console.log(formData.get("password"));

// //DELETE
// formData.delete("name")
// console.log(formData.has("name")); 
*/