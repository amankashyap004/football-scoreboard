const roundsArray = ["First", "Second", "Third", "Fourth", "Five", "Sixth", "Seventh", "Eight"];
const roundCounter = document.getElementById("round-counter");
const roundBtn = document.getElementById("round-btn");

let roundCount = 0;
roundBtn.addEventListener("click", function roundFunction() {
  if (roundCount >= roundsArray.length - 1) {
    roundCount = 0;
  } else {
    roundCount++;
  }
  roundCounter.textContent = roundsArray[roundCount];
})

function roundClear() {
  roundCount = 0;
  roundCounter.textContent = roundsArray[roundCount];
}

const newGame = document.getElementById("new-game");
newGame.addEventListener("click", () => {
  // location.reload();
  firstScoreOutputClear();
  firstFoulsScoreClear();

  secondScoreOutputClear();
  secondFoulsScoreClear();

  resetTimer();
  roundClear();
});

// Leading 
const homeTitle = document.getElementById("home-title");
const guestTitle = document.getElementById("guest-title");

let leadingHome = "";
let leadingGuest = "";

function leadingFunction() {
  let homeValue = leadingHomeFunction();
  let guestValue = leadingGuestFunction();

  if (homeValue < guestValue) {
    leadingHome = "red";
    leadingGuest = "green";
  } else if ((homeValue > guestValue)){
    leadingHome = "green";
    leadingGuest = "red";
  } else{
    leadingHome = "black";
    leadingGuest = "black";
  }

  homeTitle.style.color = leadingHome;
  guestTitle.style.color = leadingGuest;
}
