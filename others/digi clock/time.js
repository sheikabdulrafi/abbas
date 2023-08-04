const countToDate = new Date().setHours(new Date().getHours() + 24);
let prevTime;
setInterval(() => {
  const currentDate = new Date();
  currtime =
    currentDate.getHours() +
    currentDate.getMinutes() +
    currentDate.getSeconds();
  flipAllCards(currentDate);
}, 250);

function flipAllCards(time) {
  const sec = time.getSeconds();
  const min = time.getMinutes();
  let hours = time.getHours();

  if (hours > 12) {
    hours -= 12;
  }

  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(
    document.querySelector("[data-minutes-tens]"),
    Math.floor(min / 10) === 6 ? 0 : Math.floor(min / 10)
  );
  flip(document.querySelector("[data-minutes-ones]"), min % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(sec / 10));
  flip(document.querySelector("[data-seconds-ones]"), sec % 10);
}

function flip(flipCard, newNum) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);

  if (newNum === startNumber) {
    return;
  }

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("topFlip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottomFlip");

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNum;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNum;
  });

  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });

  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNum;
    bottomFlip.remove();
  });

  flipCard.append(topFlip, bottomFlip);
}
