const arrays = [1, 3, 4, 6, 2, 5, 7];

function removeElement(arrays, item) {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === item) {
            arrays.splice(i, 1)
        }
    }
    return arrays
}

removeElement(arrays, 4);

console.log(arrays);

