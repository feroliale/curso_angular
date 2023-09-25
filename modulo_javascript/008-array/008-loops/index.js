const myArr = [1, 2, 3, 4, 5, 6];

/* 
for (let index = 0; index < myArr.length; index++) {
    console.log(myArr[index]);
}
 */

const myArrObj = [
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
];

/* 
for (let index = 0; index < myArrObj.length; index++) {
    console.log(myArrObj[index].nome);
} */

for (let item of myArrObj) {
    console.log(`O ${item.raca} chamado ${item.nome}.`);
}

/* 
for (let item of myArr) {
    console.log(item);
}

 */
/* 
const obj = { nome: "Arya", raca: "Labrador" };

// só funciona direito com objetos
for (let item in obj) {
    console.log(obj[item]);
}
 */