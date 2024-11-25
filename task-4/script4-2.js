const number = prompt("Введіть тризначне число:");
if (number.length === 3 && !isNaN(number)) {
    let value1 = number[0];
    let value2 = number[1];
    let value3 = number[2];

    if (value1 === value2 && value2 === value3) {
        console.log("Всі цифри однакові.");

    } else if (value1 === value2 || value1 === value3 || value2 === value3) {
        console.log("Серед цифр є однакові.");

    } else {
        console.log("Цифри не однакові.");
    }
} else {
    console.log("Введене значення не є тризначним числом.");
}