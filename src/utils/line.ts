const button = document.getElementById("openModal") as HTMLButtonElement | null;
const line = document.querySelector(".footer__line") as HTMLDivElement | null;

function updateLineWidth(): void {
  if (!button || !line) return;

  const buttonRect = button.getBoundingClientRect();
  line.style.width = `${buttonRect.right}px`;
}

window.addEventListener("resize", updateLineWidth);
updateLineWidth();
