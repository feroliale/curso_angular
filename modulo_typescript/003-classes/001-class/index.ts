class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    getPessoa(): void {
        const retorno = `Nome: ${this.nome} | idade: ${this.idade}`;
        console.log(retorno);
    }
}

const user = new Pessoa("Usuário da Silva", 31);
user.getPessoa();

