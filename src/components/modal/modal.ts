// Логика модалки
const openBtn = document.getElementById('openModal');
const closeBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openBtn?.addEventListener('click', () => {
    modal?.classList.add('active');
    document.body.classList.add('modal-open');
});

closeBtn?.addEventListener('click', () => {
    modal?.classList.remove('active');
    document.body.classList.remove('modal-open');
});

// Закрытие по клику вне контента
modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
});