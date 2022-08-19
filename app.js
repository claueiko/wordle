
const words = [
  'GREAT',
  'WORLD',
  'STING'
]

const tries = 6;
let remaining = tries;
let currentTry = [];
let nextLetter = 0;
let rightLetter = words[Math.floor(Math.random() * words.length)]
console.log(rightLetter)

$(document).ready(function() {
    $("#1").focus();
});

function movetoNext(current, nextFieldID) {
  if (current.value.length >= current.maxLength) {
    document.getElementById(nextFieldID).focus();
  }
}

  let box = $("#1").text();
  for (let i = 0; i <= 6; i++);
  box = +1;
  
  $(".row").keyup(function (event) {
    let pressedKey = String(event.key);
  

  if (pressedKey === "Backspace") {
    deleteLetter();
    console.log("You hit backspace");
  } else if (
    pressedKey === "Enter") {
      console.log("Pressed Enter")
      check();
    } else {
     //letter only doesn't console.log other keys but is still adding to box!
     let letterOnly = pressedKey.match(/[a-z]/gi)
     if (!letterOnly) {
      pressedKey = "";
      //  $("#" + box).text("");
      console.log("not a string");
     } else {
      addLetters(pressedKey);
     }}}) ;
  

  
function addLetters(pressedKey) {
  if (nextLetter === 5) {
    return }
  pressedKey = pressedKey.toUpperCase();
  
   $("#" + box).each(function () {
   $(this).text(pressedKey);
   //ADD CLASS FOR GREEN BOX (MATCHED)
   console.log(pressedKey);
   currentTry.push(pressedKey);
   nextLetter += 1;
 })};


     
// Delete letter if backspace is pressed not working
function deleteLetter() {
$(".letter").prev("input").focus();
console.log("Got to function deleteLetter.");
}


function check() {
  let row = $(".row")[6 - remaining];
  let guessLetter = "";
  let rightGuess = Array.from(rightLetter);

for (let val of currentTry) {
  guessLetter+= val
}
// if (guessLetter !=5) {
//   console.log("NEED 5 LETTERS, YOU ENTERED " + guessLetter);
//   // change above later to append text
//   return
// }
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
      color = "green"
      console.log(color);
      
    } else {
      color = "yellow"
      console.log(color);
    }
    rightGuess[position] = "#";
  }
   let delay = 250 * i;
   setTimeout(() => {
     //shade box
     border.style.backgroundColor = color;
    //  shadeKeyBoard(letter, letterColor);
   }, delay);
}
  if (guessLetter === rightLetter) {
    console.log("You got it!");
    remaining = 0;
    return;
  } else {
    remaining -= 1;
    currentTry = [];
    nextLetter = 0;
    
    if (remaining === 0) {
      console.log("Game over, you lost");
    }
  }
}


// Function to move to next letter:
// function nextLetter() {
//   for (let i = 0; i <= 6; i++);
//   box =+ 1;
//   addLetters();
// }

// THIS ONE BELOW IF WORKING BUT ABOVE IS PREFERRED!
//     $("#body").keyup(function (event) {
//       let pressedKey = String(event.key);
//       pressedKey = pressedKey.toUpperCase();

//       $("#1").each(function(){

// CODES FOR BACKSPACE AND ENTER!

//       console.log(pressedKey);
//       if (pressedKey === "enter") {
//         check();
//       } else if (pressedKey === "BACKSPACE") {
//         deleteLetter();
//       } else {
//         $("#1").text(pressedKey);
//         nextLetter();
//       };
//     })
// });

// THIS DIDN'T WORK WITH APPEND
// $("#body").keyup(function(event){
//   let pressedKey = String(event.key);
//   pressedKey = pressedKey.toUpperCase();
//   $(".letter").each(function() {
//     $(this).append("<p>" + pressedKey + "</p>");
//   })
// })



//THIS WORKS WITH NUMBERS THEN LETTER
// $("#body").keypress(function(event) {
//     let keycode = (event.keyCode ? event.keyCode : event.which);
//     if (keycode === a) {
//      console.log("A");
//      $("#1").text("A");
//     }

// });

// //CODE TO DETECT WHICH KEY WAS PRESSED IN NUMBERS - NEED TO TRANSLATE
// $("#body").keypress(function(event) {
// let keycode = (event.keyCode ? event.keyCode : event.which);
//     console.log(keycode);
// });

//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function () {
  $(".popup-overlay, .popup-content").addClass("active");
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked
$(".close, .popup-overlay").on("click", function () {
  $(".popup-overlay, .popup-content").removeClass("active");
});
