export namespace Pessoa1 { // Define um escopo local para ser usado
    export let nome = "Joao";

    const data = 1 + 1;

    export const calc = () => {
        return data;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

