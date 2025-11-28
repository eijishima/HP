function scatterText(selector, maxOffset = 60) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const text = el.textContent;
    el.innerHTML = "";

    for (let char of text) {
      const span = document.createElement("span");
      span.textContent = char;

      const x = Math.floor(Math.random() * (maxOffset * 2 + 1)) - maxOffset;
      const y = Math.floor(Math.random() * (maxOffset * 2 + 1)) - maxOffset;

      span.style.left = `${x}px`;
      span.style.top = `${y}px`;

      el.appendChild(span);
    }
  });
}
window.addEventListener("DOMContentLoaded", () => {
scatterText("#title-wrapper h1, #title-wrapper h2");
});