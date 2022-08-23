
// List of words to be guessed.

const words = [
  'GREAT',
  'WORLD',
  'STING',
  'GUIDE',
  'HELPS',
  'COURT',
  'AUDIO',
  'PILOT',
  'PATIO',
  'VOWEL',
  'EQUAL',
  'PRIME',
  'MINUS',
  'VALUE',
  'DIGIT',
  'SOLVE',
  'RUSTY',
  'TAILS',
  'LEAST',
  'ROAST',
  'PLANE',
  'DEALT',
  'FRUIT',
  'TRACK',
  'ABOUT',
  'DROPS',
  'VAGUE',
  'MEDAL',
  'BREAD',
  'JOINS',
  'TIMES',
  'GAMES',
  'CRAMP',
  'CRABS',
  'CRAZY',
  'ARISE',
  'RULES',
  'ROUTE',
  'WHICH',
  'ALIEN',
  'IDEAS',
  'POWER',
  'TREND',
  'STEAM',
  'TIDES',
  'HOVER'
]

const tries = 6;
let remaining = tries;
let currentTry = [];
let nextLetter = 0;
let rightLetter = words[Math.floor(Math.random() * words.length)]
console.log(rightLetter)

// Function to start game on first input field
$(document).ready(function() {
    $("#1").focus();
});

// Function to move to the next field automatically when a letter is typed
function movetoNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

 let box = $("#1").text();
 for (let i = 0; i <= 6; i++);
 box = +1;

 // Function to start the game
function startGame() {
  $("input").keyup(function (event) {
    let pressedKey = String(event.key);
    let letterOnly = pressedKey.match(/[a-z]/gi);

  if (pressedKey === "Backspace") { 
    // currentTry.pop();
    deleteLetter();
    console.log("You hit backspace");

  } else if (
    pressedKey === "Enter") {
      console.log("Pressed Enter")
      check();
    } else if (!letterOnly) {
      currentTry.pop();
    } else {
    
     let letterOnly = pressedKey.match(/[a-z]/gi)
     if (!letterOnly) {
      console.log("not a string");
      currentTry.pop(pressedKey);
     } else {
      addLetters(pressedKey);
     }}
    }
    )} ;
  
 startGame();
  

 // Function to add Letters to the game
function addLetters(pressedKey) {

  if (nextLetter === 5) {
    return };

    pressedKey = pressedKey.toUpperCase();
   $("#" + box).each(function () {

    if(pressedKey === "Backspace") {
      
      console.log("Line 109");
    } else {
   $(this).text(pressedKey);
   
   //ADD CLASS FOR GREEN BOX (MATCHED)
   console.log(pressedKey);
   currentTry.push(pressedKey);
   nextLetter += 1;
   }
  })
};

     
// Delete letter if backspace is pressed 
function deleteLetter(pressedKey) {
  // console.log($('input:focus').attr('id'));
  let previous = $("input:focus").attr("id");
  previous -= 1;
   $("#" + previous).val("");
  $("#" + previous).focus();
  currentTry.pop(pressedKey);
  console.log("function delete");
  nextLetter -=1;
};

// Function to check when Enter is clicked
function check() {
  let row = $(".row")[6 - remaining];
  let guessLetter = "";
  let rightGuess = Array.from(rightLetter);

for (let val of currentTry) {
  guessLetter+= val
}

if (!words.includes(guessLetter)) {
  console.log("NOT IN THE LIST");
  // change above to append text
}

for (let i = 0; i < 5; i++) {
  let color = "";
  let border = row.children[i];
  let letter = currentTry[i];
  let position = rightGuess.indexOf(currentTry[i]);

  if (position === -1) {
    color = "grey"
    console.log(color);
  } else {
    if (letter === rightGuess[i]){
      color = "#57E292";
      console.log("green");
    } else {
      color = "#FFD133";
      console.log("yellow");
    }
    rightGuess[position] = "#";
  }
   let delay = 250 * i;
   setTimeout(() => {
     //keyboard color
     border.style.backgroundColor = color;
     
     if (color === "#57E292") {
     border.style.animation = "shake 0.5s 1" }
     
     $("input").next("input").focus();
     keyboardColor(letter, color);
   }, delay);
  
}
  if (guessLetter === rightLetter) {
    console.log("You got it!");
    setTimeout(function() {
      $("#myVideo").css("display", "block");}, 1900);

    remaining = 0;
    setTimeout(endGame, 1900);
   
    return;
  } else {
    remaining -= 1;
    currentTry = [];
    nextLetter = 0;
    
    if (remaining === 0) {
      console.log("Game over, you lost");
      setTimeout(lostGame, 1900);
    }
  }
}

// function to change bottom keyboard colors
function keyboardColor(letter, color) {
  let key = "";
   $(".key").each(function() {
    key = $(this).text();
  if (key === letter) {
  let oldColor = this.style.backgroundColor;
  console.log(key + color);
  if (oldColor === "#57E292") {
    return;
  }
  if (oldColor === "#FFD133" && color !== "#57E292") {
    return;
  }
  this.style.backgroundColor = color;
  return false;
}
   });
    
}




//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function () {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close, .popup-overlay").on("click", function () {
  $(".popup-overlay, .popup-content").removeClass("active");
});


// function for when player wins the game

function endGame() {
  
  $(".endgame-overlay, .endgame-content").addClass("active");
  $(".right-word").text(rightLetter);
  let winSound = new Audio("/sounds/win.wav");
  winSound.play();
}

// function for when player loses the game after 6 tries
function lostGame() {
  $(".endgame-overlay, .lost-content").addClass("active");
  let loseSound = new Audio("/sounds/lose.wav");
  loseSound.play();
}

$(".restart-btn").on("click", function () {
    setTimeout(function () {
      window.location.reload();
    }, 100);
  });
  
// SWITCH TO LIGHT MODE (TOGGLE)
$(function() {
  $(".light").click(function() {
    $("html").toggleClass("light-mode");
    $(".light").toggleClass("light-mode");
    $(".open").toggleClass("light-mode");
    $(".letter").toggleClass("light-mode");
    $(".key").toggleClass("light-mode");
    $("input.focus").toggleClass("light-mode");
    $("#1").focus();
  });
});
