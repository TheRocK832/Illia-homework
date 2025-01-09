document.getElementById('form').addEventListener('submit', function(event) {
const nameInput = document.getElementById('nameInput').value.trim();
const message = document.getElementById('message').value.trim();
const messagePhone = document.getElementById('phoneNumber').value.trim();
const emailInput = document.getElementById('emailInput').value.trim();

const messageName = document.getElementById('messageName');
const messageError = document.getElementById('messageError');
const phoneError = document.getElementById('phoneError');
const emailError = document.getElementById('emailError');

let isValid = true;

  messageName.textContent = '';
    if (nameInput === '') {
      messageName.textContent = 'Поле "Name" обязательно для заполнения.';
      isValid = false;
    }
  messageError.textContent = '';
    if (message.length < 5) {
      messageError.textContent = 'Сообщение должно содержать не менее 5 символов.';
      isValid = false;
    } 
    const phonePattern = /^\+380\d{9}$/;
if (!phonePattern.test(messagePhone)) {
    phoneError.textContent = 'Номер телефона должен начинаться с +380 и содержать 9 цифр.';
    isValid = false;
}

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailPattern.test(emailInput)) {
    emailError.textContent = 'Email должен содержать "@" и точку.';
    isValid = false;
}
if (isValid) {
  console.log({
      name: nameInput,
      message: message,
      phone: messagePhone,
      email: emailInput
  });
}

if (!isValid) {
  event.preventDefault();
}

});
document.getElementById('form').addEventListener('input', function(event) {
  const errorElement = event.target.nextElementSibling; 
  if (errorElement && errorElement.classList.contains('error')) {
      errorElement.textContent = '';
  }
});









