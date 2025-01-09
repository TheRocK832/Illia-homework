const book = {
    contacts: [
        {
            name: "Ilya",
            phone: "+380999999999",
            email: "rock12345133@email.com",
        },
    ],

    find: function (name) {
        const contact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        return contact ? contact : `Контакт з ім'ям ${name} не знайдено.`;
    },

    add: function (contact) {
        const exists = this.contacts.some(existingContact => existingContact.name.toLowerCase() === contact.name.toLowerCase());
        if (exists) {
            return `Контакт з ім'ям ${contact.name} вже існує.`;
        }
        this.contacts.push(contact);
        return `Контакт ${contact.name} успішно додано.`;
    },
};

console.log(book.add({ name: "Ivan", phone: "+380987654321", email: "ivan@email.com" }));
console.log(book.find("Ilya"));
console.log(book.find("Nadia"));
console.log(book.add({ name: "Serhii", phone: "+380111111111", email: "serhii@email.com" }));
