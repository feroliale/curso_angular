// Pode ser feito calculos diretamente no console
console.log(123);
console.log(123 + 1);
console.log("123");

// tomar cuidado com as strings e os calculos para não gerar bugs
console.log("----------------------");
console.log("123" + 1);
console.log("123" - 1);

// se necessitar fazer isso, utilizar a função Number(), pra ter certeza que o valor é numerico.
console.log("----------------------");
console.log(Number("123") - 1);
console.log(Number("123") + 1);

console.log("----------------------");
console.log(typeof Number("123"));
console.log(typeof 123);
console.log(typeof "123");