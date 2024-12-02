function product(number) {
    return function secondProduct (secondNumber) {
        return number * secondNumber;
    }
}

const result = product(5)(2);

console.log(result)