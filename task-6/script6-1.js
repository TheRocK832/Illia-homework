const message = prompt('Enter your string' , "hello world");
const chars = prompt('Enter some chars for removing');

function foo(string, arr) {
    let result = '';  

    for (let i = 0; i < string.length; i++) {

        if (!arr.includes(string[i])) {
            result += string[i];
        }
    }

    return result;
}

const result = foo(message, chars);

alert(result);