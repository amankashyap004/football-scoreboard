const firstPlusOne = document.getElementById("first-plus-one");
const firstPlusTow = document.getElementById("first-plus-tow");
const firstPlusThree = document.getElementById("first-plus-three");
const firstFouls = document.getElementById("first-fouls-btn");

let firstAddScore = 0;
let firstFoulsScore = 0;

function leadingHomeFunction() {
  return firstAddScore;
}

function firstScoreOutputClear() {
  firstAddScore = 0;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
}

function firstFoulsScoreClear() {
  firstFoulsScore = 0;
  firstFoulsOutputFunction(firstFoulsScore);
}

//First Add Functions
firstPlusOne.addEventListener("click", function() {
  firstAddScore++;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
});

firstPlusTow.addEventListener("click", function(){
  firstAddScore += 2;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
});

firstPlusThree.addEventListener("click", function(){
  firstAddScore += 3;
  firstScoreOutputFunction(firstAddScore);
  leadingFunction();
});

firstFouls.addEventListener("click", function(){
  firstAddScore--;
  firstScoreOutputFunction(firstAddScore);

  firstFoulsScore++;
  firstFoulsOutputFunction(firstFoulsScore);

  leadingFunction();
});

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
