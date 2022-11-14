let secondAddScore = 0;
let secondFoulsScore = 0;

function secondScoreOutputClear() {
  secondAddScore = 0;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
}

function secondFoulsScoreClear() {
  secondFoulsScore = 0;
  secondFoulsOutputFunction(secondFoulsScore);
}

function secondPlusOneFunction() {
  secondAddScore++;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
}

function secondPlusTowFunction() {
  secondAddScore += 2;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
}

function secondPlusThreeFunction() {
  secondAddScore += 3;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
}

function secondFoulsFunction() {
  secondAddScore--;
  secondScoreOutputFunction(secondAddScore);

  secondFoulsScore++;
  secondFoulsOutputFunction(secondFoulsScore);

  leadingFunction();
}

function secondScoreOutputFunction(secondAddScore) {
  const secondScoreOutput = document.getElementById("second-score-output");

  if (secondAddScore < 10 && secondAddScore >= 0) {
    secondScoreOutput.innerText = "0" + secondAddScore;
  } else {
    secondScoreOutput.innerText = secondAddScore;
  }
}

function secondFoulsOutputFunction(secondFoulsScore) {
  const secondFoulsOutput = document.getElementById("second-fouls-output");
  secondFoulsOutput.innerText = secondFoulsScore;
}

const secondPlusOne = document.getElementById("second-plus-one");
secondPlusOne.addEventListener("click", secondPlusOneFunction);

const secondPlusTow = document.getElementById("second-plus-tow");
secondPlusTow.addEventListener("click", secondPlusTowFunction);

const secondPlusThree = document.getElementById("second-plus-three");
secondPlusThree.addEventListener("click", secondPlusThreeFunction);

const secondFouls = document.getElementById("second-fouls-btn");
secondFouls.addEventListener("click", secondFoulsFunction);

function leadingGuestFunction() {
  return secondAddScore;
}
