export function textChanger() {
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.innerHTML = "Dev<b>LOVE</b>per";
    }, 0);
    setTimeout(() => {
      text.innerHTML = "Web<b>Design</b>er";
    }, 4000);
    setTimeout(() => {
      text.innerHTML = "Fullstack Dev<b>LOVE</b>per";
    }, 8000);
  };
  textLoad();
  setInterval(textLoad, 12000);
}
