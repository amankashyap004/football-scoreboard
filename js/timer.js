const startBtn = document.getElementById("start-timer");
const stopBtn = document.getElementById("pause-timer");

let minute = 02;
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
  minute = 02;
  second = 0;
  count = 100;
  document.getElementById("min").innerHTML = "02";
  document.getElementById("sec").innerHTML = "00";
}

function stopWatch() {
  if (timer) {
    count--;

    if (count == 0) {
      second--;
      count = 100;
    }

    if (second == 0) {
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

    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;

    setTimeout(stopWatch, 10);
  }
}
