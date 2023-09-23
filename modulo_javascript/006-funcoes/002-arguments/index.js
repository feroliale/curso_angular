function soma(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    return "Por favor, insira valores númericos.";
}

// console.log(soma(2, 2));

function subtracao(num1 = NaN, num2 = NaN) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 - num2;
    }
    return "Por favor, insira valores númericos";
}

// console.log(subtracao(3, 1));
