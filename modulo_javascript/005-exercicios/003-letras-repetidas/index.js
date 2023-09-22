let palavra = "Legolas GreenLeaf"
    .normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
    .replaceAll(" ", "");

let letras = {};

for (let index = 0; index < palavra.length; index++) {
    if (letras[palavra[index]]) {
        letras[palavra[index]]++;
    } else {
        letras[palavra[index]] = 1;
    }
}

console.log(letras);