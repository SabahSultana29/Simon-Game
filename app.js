let gameSeq = [];
let userSeq = [];
let btns = ["pink", "yellow", "orange", "aqua"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  //console.log("Game started");
  if (started == false) {
    console.log("game is started"); // update started ki value
    started = true;
  }
  levelUp();
});
//Creating flash buttons and levelup
function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  //choose any random color
  let ranIdx = Math.floor(Math.random() * 3);
  let randomColor = btns[ranIdx];
  let ranbtn = document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
  btnflash(ranbtn);
}
//checking whether the user has entered the proper gameSeq or not
function checkAns(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start the Game`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 400);
    reset();
  }
}
//Adding Event Listeners to buttons
function btnPress() {
  let btn = this;
  userflash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1); //last idx entered by user
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
