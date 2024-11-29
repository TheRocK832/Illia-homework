
const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function foo(array) {
    let total = 0; 
    let count = 0; 

    for (let item of array) {
        if (typeof item === 'number') { 
            total = total + item;
            count++;
        }
    }
    return total / count; 
}

const results = foo(array);

alert(results);