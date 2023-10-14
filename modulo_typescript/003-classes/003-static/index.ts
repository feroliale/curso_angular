class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const shoe1: { tamanho: number, marca: string, estoque: boolean } = {
    tamanho: 39,
    marca: "adidas",
    estoque: true
};

const shoe2: { tamanho: number, marca: string, estoque: boolean } = {
    tamanho: 37,
    marca: "nike",
    estoque: true
};

const shoe3: { tamanho: number, marca: string, estoque: boolean } = {
    tamanho: 39,
    marca: "diadora",
    estoque: true
};

console.log(Utils.cloneObject([shoe1, shoe2, shoe3]));  //O método static pode ser chamado sem ser iniciado um objeto da classe
