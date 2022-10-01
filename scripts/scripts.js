window.onload = () => {
  const locations = document.getElementsByClassName("location");
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
  let gameState = 1; // 1 if game is on, 0 if the game has ended;
  let comparisonResult;
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
  let isPlayer = 1; // This variable will determine if it is the player turn (1 == player)
  function turn(event, index) {
    if (event.innerHTML == "") {
      if (isPlayer) {
        event.innerHTML = "<img src='assests/red.png'>";
        event.classList.add("afterimg");
        gameBoard[index] = "x";
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
        gameBoard[index]="o";
        if (index >= 3 && index <= 5) {
          event.classList.add("afterImgrow2");
        } else if (index >= 6) {
          event.classList.add("afterImgrow3");
        }
        isPlayer = 1;
        console.log(gameBoard.toString());
      }
    }
  }
  for (let i = 0; i < locations.length; i++) {
    locations[i].addEventListener("click", () => turn(locations[i], i));
  }
};
