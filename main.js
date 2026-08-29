let scoreHomeEl = document.getElementById("home-score");
let scoreGuestsEl = document.getElementById("guest-score");

let saveScoreHome = document.getElementById("saved-home");
let saveScoreGuests = document.getElementById("saved-guest");

let homeOneBtn = document.getElementById("btn-home-1");
let homeTwoBtn = document.getElementById("btn-home-2");
let homeThreeBtn = document.getElementById("btn-home-3");

let guestsOneBtn = document.getElementById("btn-guest-1");
let guestsTwoBtn = document.getElementById("btn-guest-2");
let gustsThreeBtn = document.getElementById("btn-guest-3");

let saveBtn = document.getElementById("savescore-btn");
let clearBtn = document.getElementById("clear-btn");

let scoreHome = 0;
let scoreGuests = 0;

homeOneBtn.addEventListener("click", addHomeOne);
homeTwoBtn.addEventListener("click", addHomeTwo);
homeThreeBtn.addEventListener("click", addHomeThree);

function addHomeOne() {
  scoreHome += 1;
  renderHomeScore();
}

function addHomeTwo() {
  scoreHome += 2;
  renderHomeScore();
}

function addHomeThree() {
  scoreHome += 3;
  renderHomeScore();
}

guestsOneBtn.addEventListener("click", addGuestsOne);
guestsTwoBtn.addEventListener("click", addGuestsTwo);
gustsThreeBtn.addEventListener("click", addGuestshree);

function addGuestsOne() {
  scoreGuests += 1;
  renderGuestsScore();
}

function addGuestsTwo() {
  scoreGuests += 2;
  renderGuestsScore();
}

function addGuestshree() {
  scoreGuests += 3;
  renderGuestsScore();
}

saveBtn.addEventListener("click", function () {
  saveScoreHome.textContent += scoreHome + " | ";
  saveScoreGuests.textContent += scoreGuests + " | ";
  scoreHome = 0;
  scoreGuests = 0;

  renderHomeScore();
  renderGuestsScore();
});

clearBtn.addEventListener("click", function () {
  scoreHome = 0;
  scoreGuests = 0;
  saveScoreHome.textContent = "";
  saveScoreGuests.textContent = "";

  renderHomeScore();
  renderGuestsScore();
});

function renderHomeScore() {
  scoreHomeEl.textContent = scoreHome;
  highlightCurrentWinner();
}

function renderGuestsScore() {
  scoreGuestsEl.textContent = scoreGuests;
  highlightCurrentWinner();
}

function highlightCurrentWinner() {
  if (scoreHome > scoreGuests) {
    scoreHomeEl.style.border = "3px solid white";
    scoreGuestsEl.style.border = "none";
  } else if (scoreGuests > scoreHome) {
    scoreHomeEl.style.border = "none";
    scoreGuestsEl.style.border = "3px solid white";
  } else {
    scoreGuestsEl.style.border = "none";
    scoreHomeEl.style.border = "none";
  }
}
