interface IPessoa {
    nome: string,
    idade: number,
    readonly cpf: number,
    enable(): boolean
}

const pessoa: IPessoa = {
    nome: "José",
    idade: 31,
    cpf: 12345678900,
    enable: () => {
        return true;
    }
}

class Jose implements IPessoa {
    nome: string = "José";
    idade: number = 30;
    readonly cpf: number = 12345678900;

    enable(): boolean {
        return true;
    }

}