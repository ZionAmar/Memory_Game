let cardsAry = [
  "&#128512;",
  "&#128151;",
  "&#128514;",
  "&#129409;",
  "&#9748;",
  "&#9749;",
  "&#9924;",
  "&#9940;",
  "&#127752;",
  "&#127769;",
  "&#127796;",
  "&#127799;",
  "&#128512;",
  "&#128151;",
  "&#128514;",
  "&#129409;",
  "&#9748;",
  "&#9749;",
  "&#9924;",
  "&#9940;",
  "&#127752;",
  "&#127769;",
  "&#127796;",
  "&#127799;",
];
let boardGame = document.getElementById("boardGame");
let tagAry = [];
let valAry = [];
let score = 0;
let sec = 0;
let min = 0;
let how = 0;
let timer = 0;
function myTime() {
  sec++;
  let d = new Date(2012, 0, 18, how, min, sec);
  document.getElementById("time").innerHTML = "טיימר:" + d.toLocaleTimeString();
  if (score == 12) {
    clearInterval(timer);
    setTimeout(alert("כל הכבוד סיימתם ב...   " + d.toLocaleTimeString()), 500);
    setTimeout(startGame(), 500);
  }
}
function randomCardsAry() {
  timer = setInterval(myTime, 1000);
  for (let i = cardsAry.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = cardsAry[i];
    cardsAry[i] = cardsAry[j];
    cardsAry[j] = k;
  }
  showCardsAry(cardsAry);
}
function showCardsAry(cardsAry) {
  let textCards = "";
  for (let x of cardsAry) {
    textCards += `<div class="box" tabindex="-1" onkeyup="showThisNum(this,'${x}')">&#127183;</div>`;
    boardGame.style.display = "grid";
    boardGame.innerHTML = textCards;
  }
}
function showThisNum(tag, val) {
  if (!valAry[1]) {
    tag.innerHTML = val;
    saveValAndTag(tag, val);
  }
}
function saveValAndTag(tag, val) {
  if (tagAry[0] != tag) {
    if (!valAry[0]) {
      valAry[0] = val;
      tagAry[0] = tag;
    } else {
      valAry[1] = val;
      tagAry[1] = tag;
      check2Nums(valAry, tagAry);
    }
  }
}
function check2Nums(valAry, tagAry) {
  if (valAry[0] == valAry[1]) {
    tagAry[0].onkeyup = "";
    tagAry[1].onkeyup = "";
    score++;
    document.getElementById("points").innerHTML = `נקודות:${score}`;
    valAry[0] = "";
    valAry[1] = "";
  } else {
    setTimeout(function () {
      tagAry[0].innerHTML = "&#127183;";
      tagAry[1].innerHTML = "&#127183;";
      valAry[0] = "";
      valAry[1] = "";
    }, 1000);
  }
}
function startGame() {
  score = 0;
  sec = 0;
  min = 0;
  how = 0;
  document.getElementById("time").innerHTML = `טיימר:0:00:00`;
  document.getElementById("points").innerHTML = `נקודות:${score}`;
  boardGame.style.display = "block";
  boardGame.innerHTML = `<button tabindex="-1" onkeyup="randomCardsAry()" id="btn">התחל</br>&#127918;</br>משחק חדש</button>`;
}
