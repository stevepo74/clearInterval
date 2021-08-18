//clearInterval

const speechBubble = document.querySelector(".speech-bubble");
let height = 50;

function moveBubble() {
  height += 50;
  speechBubble.style.top = height + "px";
  console.log(height);
  if (height === 350) {
    clearInterval(timerId);
  }
}

let timerId = setInterval(moveBubble, 1000);
