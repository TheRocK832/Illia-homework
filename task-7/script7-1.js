 function sum(number) {
    let total = number || 0; 

    return function (num) {
        total += num; 
        return total;    
    };
}

const add = sum(0); 
console.log(add(4));  
console.log(add(6));  
console.log(add(10)); 
console.log(add(7));  
