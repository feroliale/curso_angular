const pedidos = [
    {
        id: 10,
        nome: "Cliente 1",
        alimento: "Cheese Bacon",
        bebida: "Coca Cola"
    },
    {
        id: 12,
        nome: "Cliente 2",
        alimento: "Cheese Calabresa",
        bebida: "Fanta"
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
        bebida: "Pepsi Twister"
    },
    {
        id: 24,
        nome: "Cliente 24",
        alimento: "Cheese Salada",
        bebida: "Suco de Groselia"
    },
];

pedidos.map((element, index) => {
    if (element.id === 19) {
        return (element.alimento = "Cheese Dogão");
    }
});

console.log(pedidos);