// function declaration
function isValidDeclaration() {
    const soma = 1 + 2;

    if (soma === 3) {
        return true;
    }

    return false;
}

console.log(isValidDeclaration());

// function expression
const isValidExpression = function () {
    return false;
}

console.log(isValidExpression());

// arrow function
const isValidArrow = () => 2 * 2;

console.log(isValidArrow());

const isValidArrowBrackets = () => {
    const multiply = 2 * 2;
    return multiply;
}

console.log(isValidArrowBrackets());