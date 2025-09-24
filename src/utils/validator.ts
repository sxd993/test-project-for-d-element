export {};

declare global {
  interface String {
    isValidName(): boolean;
    isValidEmail(): boolean;
    isValidMessage(): boolean;
  }
}

// Методы валидации
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
