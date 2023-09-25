const pedidos = [
    {
        id: 10,
        nome: "Cliente 1",
        alimento: "Cheese Bacon",
        bebida: "Coca-Cola",
        valor: 18,
    },
    {
        id: 12,
        nome: "Cliente 2",
        alimento: "Cheese Calabresa",
        bebida: "Coca-Cola",
        valor: 15,
    },
    {
        id: 22,
        nome: "Cliente 3",
        alimento: "Cheese Tudo",
        bebida: "Pepsi",
        valor: 20,
    },
    {
        id: 19,
        nome: "Cliente 4",
        alimento: "Cheese Frango",
        bebida: "Pepsi",
        valor: 15,
    },
    {
        id: 24,
        nome: "Cliente 24",
        alimento: "Cheese Salada",
        bebida: "Suco de Groselia",
        valor: 18,
    },
];

/*
  A ideia é pegar todos os valores para saber quanto foi o faturamento.
*/
const balancete = pedidos.reduce((total, element) => {
    return total + element.valor;
}, 0);

console.log("O faturamento é de: " + balancete + " R$.")