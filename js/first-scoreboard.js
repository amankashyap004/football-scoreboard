let firstAddScore = 0;
let firstFoulsScore = 0;

function firstScoreOutputClear() {
  firstAddScore = 0;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
}

function firstFoulsScoreClear() {
  firstFoulsScore = 0;
  firstFoulsOutputFunction(firstFoulsScore);
}

function firstPlusOneFunction() {
  firstAddScore++;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
}

function firstPlusTowFunction() {
  firstAddScore += 2;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
}

function firstPlusThreeFunction() {
  firstAddScore += 3;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
}

function firstFoulsFunction() {
  firstAddScore--;
  firstScoreOutputFunction(firstAddScore);

  firstFoulsScore++;
  firstFoulsOutputFunction(firstFoulsScore);

  leadingFunction();
}

function firstScoreOutputFunction(firstAddScore) {
  const firstScoreOutput = document.getElementById("first-score-output");

  if (firstAddScore < 10 && firstAddScore >= 0) {
    firstScoreOutput.innerText = "0" + firstAddScore;
  } else {
    firstScoreOutput.innerText = firstAddScore;
  }
}

function firstFoulsOutputFunction(firstFoulsScore) {
  const firstFoulsOutput = document.getElementById("first-fouls-output");
  firstFoulsOutput.innerText = firstFoulsScore;
}

const firstPlusOne = document.getElementById("first-plus-one");
firstPlusOne.addEventListener("click", firstPlusOneFunction);

const firstPlusTow = document.getElementById("first-plus-tow");
firstPlusTow.addEventListener("click", firstPlusTowFunction);

const firstPlusThree = document.getElementById("first-plus-three");
firstPlusThree.addEventListener("click", firstPlusThreeFunction);

const firstFouls = document.getElementById("first-fouls-btn");
firstFouls.addEventListener("click", firstFoulsFunction);

function leadingHomeFunction() {
  return firstAddScore;
}
