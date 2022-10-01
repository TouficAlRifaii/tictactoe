window.onload = () => {
  const locations = document.getElementsByClassName("location");
  let isPlayer = 1; // This variable will determine if it is the player turn (1== player)
  function turn(event, index) {
    if (event.innerHTML == "") {
      if (isPlayer) {
        event.innerHTML = "<img src='assests/red.png'>";
        event.classList.add("afterimg");
        if (index >= 3 && index <= 5) {
          console.log("inside first if");
          event.classList.add("afterImgrow2");
        } else if (index >= 6) {
          console.log("inside second if");
          event.classList.add("afterImgrow3");
        }
        isPlayer = 0;
      } else {
        event.innerHTML = "<img src='assests/yellow.png'>";
        event.classList.add("afterimg");
        if (index >= 3 && index <= 5) {
          console.log("inside first if");
          event.classList.add("afterImgrow2");
        } else if (index >= 6) {
          console.log("inside second if");
          event.classList.add("afterImgrow3");
        }
        isPlayer = 1;
      }
    }
  }
  for (let i = 0; i < locations.length; i++) {
    locations[i].addEventListener("click", () => turn(locations[i], i));
  }
};
