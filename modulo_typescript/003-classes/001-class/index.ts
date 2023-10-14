class Pessoa {
    private _nome: string;
    private _idade: number;
    private _docNumber: number;

    public get nome(): string {
        return this._nome;
    }

    public get idade(): number {
        return this._idade;
    }

    public get docNumber(): number {
        return this._docNumber;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public set docNumber(value: number) {
        this._docNumber = value;
    }

    constructor(nome: string, idade: number, docNumber: number) {
        this._nome = nome;
        this._idade = idade;
        this._docNumber = docNumber;
    }

    getPessoa(): void {
        const retorno = `Nome: ${this._nome} | idade: ${this._idade} | documento: ${this._docNumber}`;
        console.log(retorno);
    }
}

const user = new Pessoa("Usuário da Silva", 31, 123456);
user.getPessoa();

