const pedidos = [
    {
        id: 10,
        nome: "Cliente 1",
        alimento: "Cheese Bacon",
        bebida: "Coca-Cola"
    },
    {
        id: 12,
        nome: "Cliente 2",
        alimento: "Cheese Calabresa",
        bebida: "Coca-Cola"
    },
    {
        id: 22,
        nome: "Cliente 3",
        alimento: "Cheese Tudo",
        bebida: "Pepsi"
    },
    {
        id: 19,
        nome: "Cliente 4",
        alimento: "Cheese Frango",
        bebida: "Pepsi"
    },
    {
        id: 24,
        nome: "Cliente 24",
        alimento: "Cheese Salada",
        bebida: "Suco de Groselia"
    },
];

const findPedidos = pedidos.find((element, index) => {
    return element.bebida === "Pepsi";
});

console.log("FIND", findPedidos);
// console.log("PEDIDOS", pedidos);