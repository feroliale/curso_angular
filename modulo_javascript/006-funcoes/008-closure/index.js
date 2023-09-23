/* function askName(name) {
    const msg = `o seu nome é`;

    function yourName() {
        return `${msg} ${name}`;
    }

    return yourName();
}

console.log(askName("Legolas")); */

function Calculadora(num1, num2) {

    const result = "Resultado:";

    const soma = () => {
        return `${result} ${num1 + num2}`;
    }

    const subtracao = () => {
        return `${result} ${num1 - num2}`;
    }

    const multiplicacao = () => {
        return `${result} ${num1 * num2}`;
    }

    const divisao = () => {
        return `${result} ${num1 / num2}`;
    }

    return {
        soma: soma(),
        subtracao: subtracao(),
        multiplicacao: multiplicacao(),
        divisao: divisao(),
    };
}

console.log(Calculadora(10, 5)); // Só é possivel acessar os valores que foram retornados pela função;