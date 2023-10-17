// Se eu não tivesse colocado o escopo de namespace não poderia usar a variavel nome.
let nome = "jao";

import { Pessoa, Pessoa1 } from "./module";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log("Local |", nome); // Não é possivel criar a var nome e não é possivel dar um console log

console.log(Pessoa.Maria.nome);
console.log(Pessoa.Joao.nome);