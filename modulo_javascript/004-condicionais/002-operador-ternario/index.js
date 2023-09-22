const velocidade = 85;
const warn = 85;

// condicao ? true : false

const condicao =
    velocidade >= warn
        ? console.log("Recebeu multa!")
        : console.log("Continua rodando!");

if (velocidade >= warn) {
    console.log("Recebeu multa!");
} else {
    console.log("Continua rodando!");
}