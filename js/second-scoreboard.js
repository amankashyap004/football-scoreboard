const secondPlusOne = document.getElementById("second-plus-one");
const secondPlusTow = document.getElementById("second-plus-tow");
const secondPlusThree = document.getElementById("second-plus-three");
const secondFouls = document.getElementById("second-fouls-btn");

function leadingGuestFunction() {
  return secondAddScore;
}

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

//Second Add Functions
secondPlusOne.addEventListener("click", function(){
  secondAddScore++;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
});

secondPlusTow.addEventListener("click", function() {
  secondAddScore += 2;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
});

secondPlusThree.addEventListener("click", function(){
  secondAddScore += 3;
  secondScoreOutputFunction(secondAddScore);
  leadingFunction();
});

secondFouls.addEventListener("click", function(){
  secondAddScore--;
  secondScoreOutputFunction(secondAddScore);

  secondFoulsScore++;
  secondFoulsOutputFunction(secondFoulsScore);

  leadingFunction();
})

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
