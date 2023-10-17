// Se eu não tivesse colocado o escopo de namespace não poderia usar a variavel nome.
let nome = "jao";

import { Pessoa1 } from "./pessoa-1";

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log(nome); // Não é possivel criar a var nome e não é possivel dar um console log