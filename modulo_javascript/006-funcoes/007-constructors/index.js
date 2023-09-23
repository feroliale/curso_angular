/* function Name(name, sobrenome) {
    this.name = name;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {
        const nomeCompleto = `${this.name} ${this.sobrenome}`;
        return nomeCompleto;
    }
}

const persona = new Name("Legolas", "Greenleaf");
const being = new Name("Gimli", "GlóinSon");

console.log(persona.nomeCompleto()); */

function Calculadora() {
    this.soma = (num1, num2) => {
        return `${num1 + num2}`;
    }

    this.subtracao = (num1, num2) => {
        return `${num1 - num2}`;
    }

    this.multiplicacao = (num1, num2) => {
        return `${num1 * num2}`;
    }

    this.divisao = (num1, num2) => {
        return `${num1 / num2}`;
    }
}

const operacao = new Calculadora();

console.log(operacao.soma(50, 5));
console.log(operacao.subtracao(6, 4));
console.log(operacao.multiplicacao(9, 2));
console.log(operacao.divisao(121, 11));