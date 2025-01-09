const user = {
    name: "Ілля",
    age: 26,
    location: "Кривий Ріг, Україна",
    email: "rock12345133@gmail.com",
    getInfo() {
        return `Ім'я: ${this.name}\nВік: ${this.age}\nМісце проживання: ${this.location}\nEmail: ${this.email}`;
    }
};

console.log(user.getInfo());


function User(name, age, location, email) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.email = email;

    this.getInfo = function () {
        return `Ім'я: ${this.name}\nВік: ${this.age}\nМісце проживання: ${this.location}\nEmail: ${this.email}`;
    };
}
const userSecond = new User("Іван", 26, "Київ, Україна", "ivan@gmail.com");

console.log(userSecond.getInfo());