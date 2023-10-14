abstract class Pessoa {
    protected nome: string;
    protected idade: number;
    protected docNumber: number;
    protected abstract profissao: string;
    public abstract setProfissao(value: string): string;

    constructor(nome: string, idade: number, docNumber: number) {
        this.nome = nome;
        this.idade = idade;
        this.docNumber = docNumber;
    }

    public get pessoa(): void {
        const retorno = `Nome: ${this.nome} | idade: ${this.idade} | documento: ${this.docNumber} | profissão: ${this.profissao}`;
        return console.log(retorno);
    }
}

class Joao extends Pessoa {
    protected profissao = "Engenheiro";

    public setProfissao(value: string): string {
        joao.profissao = value;
        return this.profissao;
    }

    constructor() {
        super("João da Silva", 31, 123456);
    }
}

class Maria extends Pessoa {
    protected profissao = "Cooker";

    public setProfissao(value: string): string {
        return "Maria não quer trocar a profissão.";
    }

    constructor() {
        super("Maria da Silva", 28, 4321546);
    }
}

const joao = new Joao;
joao.pessoa;
joao.setProfissao("Web Desginer");
joao.pessoa;

const maria = new Maria;
maria.pessoa;
maria.setProfissao("Engenheira");
maria.pessoa;