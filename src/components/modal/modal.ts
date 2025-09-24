// Логика модалки
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

// Функция закрытия модалки
export const closeModal = () => {
  modal?.classList.remove('active');
  document.body.classList.remove('modal-open');
}

// Открытие модалки
openBtn?.addEventListener('click', () => {
  modal?.classList.add('active');
  document.body.classList.add('modal-open');
});

// Закрытие по кнопке
closeBtn?.addEventListener('click', closeModal);

// Закрытие по клику вне контента
modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
