declare global {
  interface String {
    isValidName(): boolean;
    isValidEmail(): boolean;
    isValidMessage(): boolean;
  }
}

String.prototype.isValidName = function (): boolean {
  const value = this.trim();
  return value.length >= 2 && /^[a-zA-Zа-яА-ЯёЁ\s]+$/.test(value);
};

String.prototype.isValidEmail = function (): boolean {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(this.trim());
};

String.prototype.isValidMessage = function (): boolean {
  return this.trim().length >= 5;
};

// Получаем форму и поля
const form = document.getElementById('contactForm') as HTMLFormElement;
const nameInput = form.elements.namedItem('name') as HTMLInputElement;
const emailInput = form.elements.namedItem('email') as HTMLInputElement;
const messageInput = form.elements.namedItem('message') as HTMLTextAreaElement;

// Обработчик отправки формы
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  let valid = true;
  let errors: string[] = [];

  if (!name.isValidName()) {
    valid = false;
    errors.push('Имя должно быть не менее 2 букв и содержать только буквы и пробелы.');
  }
  if (!email.isValidEmail()) {
    valid = false;
    errors.push('Невалидный эмейл.');
  }
  if (!message.isValidMessage()) {
    valid = false;
    errors.push('Сообщение должно быть > 5 символов.');
  }

  if (!valid) {
    alert(errors.join('\n'));
    return;
  }

  // Если валидно, можно отправлять данные
  console.log({ name, email, message });
  alert('Form submitted successfully!');
  form.reset();
});
