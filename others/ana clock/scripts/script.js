setInterval(setClock, 1000);

const hourHand = document.getElementById("hour");
const minHand = document.getElementById("min");
const secHand = document.getElementById("sec");
const audio = document.getElementById("audio");

function playAudio() {}

function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  setRotation(secHand, seconds);
  setRotation(minHand, minutes);
  setRotation(hourHand, hours);
}

function setRotation(element, roationRatio) {
  element.style.setProperty("--rotation", roationRatio * 360 + "deg");
  playAudio();
}
