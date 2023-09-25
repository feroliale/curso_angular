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

myDogObj.forEach((item, index) => {
    if (item.nome === "Laila") {
        return console.log(index, "Tanuki-chan");
    }
    console.log(index, item.nome);
});