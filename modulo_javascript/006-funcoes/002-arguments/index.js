function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    return "Por favor, insira valores númericos.";
}

// console.log(soma(2, 2));

function subtracao() {
    return arguments;
}

console.log(subtracao(1, 2, "abc"));
