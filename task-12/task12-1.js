let link = ''; 

document.getElementById('button-first').addEventListener('click', function() {
    const userInput = prompt('Введіть посилання:');
    if (userInput) {
        link = userInput;
        alert('Посилання збережено.');
    } else {
        alert('Посилання не введено.');
    }
});

document.getElementById('button-second').addEventListener('click', function() {
    if (link) {
        window.location.href = link;
    } else {
        alert('Посилання ще не встановлено.');
    }
});