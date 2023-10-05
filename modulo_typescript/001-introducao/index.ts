// Typescript
// npm install -g typescript
// tsc --init

// instalaçãodo plugion Code Runner
// npm i -g ts-node
// ctrl + alt + n

console.log("Deu bom.");

const pedido = (pedido: string) => {
    return `Estamos trabalhando na produção de seu ${pedido}`;
};

console.log(pedido("hamburguer"));