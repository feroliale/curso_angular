export namespace Pessoa {
    export namespace Joao { // Define um escopo local para ser usado
        export let nome = "Joao";

        const data = 1 + 1;

        export const calc = () => {
            return data;
        };
    }

    export namespace Maria { // Define um escopo local para ser usado
        export let nome = "Maria";

        const data = 1 + 1;

        export const calc = () => {
            return data;
        };
    }
}

// console.log(Pessoa.Joao.nome);
// console.log(Pessoa.Maria.calc());
