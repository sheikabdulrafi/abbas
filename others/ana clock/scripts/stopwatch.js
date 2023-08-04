const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("reset");

startButton.addEventListener("click", startRotation);

function startRotation() {
  setInterval(setClock, 1000);
  let secDegrees = 0;
  let minDegrees = 0;

  const minHand = document.getElementById("min");
  const secHand = document.getElementById("sec");
  const audio = document.getElementById("audio");

  function setClock() {
    if (secDegrees >= 0) {
      setRotation(secHand, secDegrees);
      secDegrees++;
    } else if (secDegrees == 60) {
      secDegrees = 0;
      minDegrees++;
      setRotation(secHand, secDegrees);
    }
    setRotation(minHand, minDegrees);
  }

  function setRotation(element, roationRatio) {
    element.style.setProperty("--rotation", roationRatio * 6 + "deg");
  }
}
