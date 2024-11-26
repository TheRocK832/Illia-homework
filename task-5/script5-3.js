const message = parseInt(prompt("Введіть будь-яке число."))
// console.log(typeof message);
for (let i = 1; i <= 100; i++) {
    if (i * i <= message) {
    console.log(i);}
}
