let comparisonResult;
let gameState = 1; // 1 if game is on, 0 if the game has ended;
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const gameBoard = [
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
];
function compare(winningArray, gameArray) {
  let flag = false;
  for (let i = 0; i < winningArray.length && flag == false; i++) {
    if (
      gameArray[winningArray[i][0]] != "empty" &&
      gameArray[winningArray[i][0]] == gameArray[winningArray[i][1]] &&
      gameArray[winningArray[i][0]] == gameArray[winningArray[i][2]]
    ) {
      if (gameArray[winningArray[i][0]] == "x") {
        comparisonResult = "Victory";
        flag = true;
        gameState = 0;
      } else {
        comparisonResult = "Defeat";
        flag = true;
        gameState = 0;
      }
    }
  }
  if (flag == false && !gameBoard.includes("empty")) {
    comparisonResult = "Draw";
    gameState = 0;
  }
}
window.onload = () => {
  const locations = document.getElementsByClassName("location");
  const resultH3 = document.getElementById("result");
  let isPlayer = 1; // This variable will determine if it is the player turn (1 == player)
  function turn(event, index) {
    if (gameState == 1) {
      if (event.innerHTML == "") {
        if (isPlayer) {
          event.innerHTML = "<img src='assests/red.png'>";
          event.classList.add("afterimg");
          gameBoard[index] = "x";
          compare(win, gameBoard);
          if (index >= 3 && index <= 5) {
            event.classList.add("afterImgrow2");
          } else if (index >= 6) {
            event.classList.add("afterImgrow3");
          }
          isPlayer = 0;
          console.log(gameBoard.toString());
        } else {
          event.innerHTML = "<img src='assests/yellow.png'>";
          event.classList.add("afterimg");
          gameBoard[index] = "o";
          compare(win, gameBoard);
          if (index >= 3 && index <= 5) {
            event.classList.add("afterImgrow2");
          } else if (index >= 6) {
            event.classList.add("afterImgrow3");
          }
          isPlayer = 1;
          console.log(gameBoard.toString());
        }
      }
    } if(comparisonResult != undefined) {
      resultH3.innerText = comparisonResult;
    }
  }
  for (let i = 0; i < locations.length; i++) {
    locations[i].addEventListener("click", () => turn(locations[i], i));
  }
};
