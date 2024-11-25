const yearOfBirth = prompt("Введіть ваш рік народження");
const city = prompt("Введіть ваше місто");
const favoriteSport = prompt("Введіть ваш улюблений вид спорту");
// console.log(yearOfBirth);
// console.log(city);
// console.log(favoriteSport);
if (yearOfBirth && city && favoriteSport) {
    const todayDate = new Date().getFullYear();
    const age = todayDate - parseInt(yearOfBirth);

    
    let cityMessage;
    switch (city.toLowerCase()) {
        case "київ":
            cityMessage = "столиці України.";
            break;
        case "вашингтон":
            cityMessage = "столиці США.";
            break;
        case "лондон":
                cityMessage = "столиці Великобританії.";
                break;
        default: 
            cityMessage = `місті ${city}.`;
    }

    alert(`Тобі ${age} років. \nТи живеш в ${cityMessage} \nУлюблений вид спорту ${favoriteSport}`);
} else {
    alert("Ви не заповнили дані. Спробуйте ще раз!");
}

