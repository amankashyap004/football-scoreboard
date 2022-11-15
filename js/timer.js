const startBtn = document.getElementById("start-timer");
const stopBtn = document.getElementById("pause-timer");

const min = document.getElementById("min")
const sec = document.getElementById("sec")

let minute = 2;
let second = 00;
let count = 100;

startBtn.addEventListener("click", function() {
  timer = true;
  stopWatch();
});

stopBtn.addEventListener("click", function() {
  timer = false;
});

function resetTimer() {
  timer = false;
  minute = 2;
  second = 0;
  count = 100;

  min.textContent = "02";
  sec.textContent = "00";
}

function stopWatch() {
  if (timer) {
    count--;

    if (count === 0) {
      second--;
      count = 100;
    }

    if (second === 0) {
      minute--;
      second = 60;
      // second = 2;
    }

    if (minute < 0) {
      resetTimer();
      roundFunction();
    }

    let minString = minute;
    let secString = second;

    if (minute < 10) {
      minString = "0" + minString;
    }

    if (second < 10) {
      secString = "0" + secString;
    }

    min.textContent = minString;
    sec.textContent = secString;

    setTimeout(stopWatch, 10);
  }
}
