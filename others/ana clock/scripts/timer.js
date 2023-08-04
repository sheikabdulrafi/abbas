const startTimer = document.querySelector(".startTimer");
const minUserData = document.querySelector(".minutesTimer");
const secUserData = document.querySelector(".secondsTimer");
const timerSec = document.getElementById("timerSec");
const timerMin = document.getElementById("timerMin");

let timerInterval;
let elapsedMinutes = 0;

startTimer.addEventListener("click", () => {
  const userMin = parseInt(minUserData.value) || 0;
  const userSec = parseInt(secUserData.value) || 0;

  const totalTime = userMin * 60 + userSec;
  let remainingTime = totalTime;

  if (totalTime > 0) {
    let secRotation = (userSec / 60) * 360;
    let minRotation = ((userMin * 60 + userSec) / 3600) * 360;

    timerInterval = setInterval(() => {
      remainingTime--;

      secRotation += 360 / 60; // Increment by 6 degrees for each second

      timerSec.style.transform = `rotate(${secRotation}deg)`;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        window.alert("Timer completed!");

        // Reset hands to the initial position
        timerSec.style.transform = `rotate(0deg)`;
        timerMin.style.transform = `rotate(0deg)`;
        elapsedMinutes = 0;
      }

      if (remainingTime % 60 === 0 && elapsedMinutes < userMin) {
        elapsedMinutes++;
        minRotation += 360 / 60; // Increment by 6 degrees for each minute
        timerMin.style.transform = `rotate(${minRotation}deg)`;
      }
    }, 1000);
  }
});
