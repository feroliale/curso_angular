const fn = (nome: string, idade?: number) => {
    if (idade) {
        return `nome: ${nome}, idade: ${idade}.`;
    }

    return `nome: ${nome}, idade: sem valor definido.`;
}

console.log(fn("Legolas", 289));
console.log(fn("Legolas"));
