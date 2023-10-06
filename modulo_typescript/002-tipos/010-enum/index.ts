enum EMes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
    ABR = "Abril",
    MAI = "Maio",
    JUN = "Junho",
    JUL = "Julho",
    AGO = "Agosto",
    SET = "Setembro",
    OUT = "Outubro",
    NOV = "Novembro",
    DEZ = "Dezembro",
};

console.log(EMes.JUL);
console.log(EMes.JAN);

const pessoa: { nome: string, mesAniversario: string } = {
    nome: "Pessoa",
    mesAniversario: EMes.DEZ,
};

if (pessoa.mesAniversario === EMes.DEZ) {
    console.log(pessoa);
}