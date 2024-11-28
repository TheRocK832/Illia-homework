const number = parseInt(prompt("Введіть число"));
if (isNaN(number) || number <= 1) {
    alert("Треба ввести число яке буде більше 1");
} else {
    let result = true;

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            result = false;
            break;
        }
    }
    if (result) {
                alert(`${number} є простим`);
            } else {
                alert(`${number} не є простим`);
            }
        }       
  








