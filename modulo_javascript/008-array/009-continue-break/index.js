const myDogObj = [
    {
        nome: "Arya",
        raca: "Labrador",
    },
    {
        nome: "Laila",
        raca: "Yorkshire",
    },
    {
        nome: "Cacau",
        raca: "Lhasa Apso",
    },
    {
        nome: "Skank",
        raca: "Pastor Alemão",
    },
    {
        nome: "Pingo",
        raca: "Dalmata",
    },
    {
        nome: "Felicia",
        raca: "Pastor Suiço",
    },
];

/* 
for (let item of myDogObj) {
    if (item.nome === "Laila") {
        console.log(`${item.nome} é um tanuki!`);
        continue;
    }

    console.log(`${item.nome} é um ${item.raca}!`);
}
 */

for (let item of myDogObj) {
    if (item.nome === "Laila") {
        console.log(`${item.nome} é um tanuki!`);
        continue; // vai para a proxima iteração do loop
    }

    if (item.nome === "Skank") {
        console.log(`${item.nome} não está mais no meio de nós. A seção In Memoriam inicia aqui.`);
        break; // trava o loop
    }

    console.log(`${item.nome} é um ${item.raca}!`);
}
