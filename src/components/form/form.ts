import "../../utils/validator";
import { closeModal } from "../modal/modal";


document.addEventListener("DOMContentLoaded", () => {
  const closeBtn = document.getElementById("closeModal") as HTMLButtonElement;
  const form = document.getElementById("contactForm") as HTMLFormElement;

  closeBtn.addEventListener("click", closeModal);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Форма сабмитится");
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!name.isValidName() || !email.isValidEmail() || !message.isValidMessage()) {
      return; 
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      console.log("Ответ сервера:", response);
      closeModal();
      form.reset();
    } catch (err) {
      console.error(err);
    }
  });
});
