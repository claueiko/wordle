
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
  'GAMES'
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

function startGame() {

  $("input").keyup(function (event) {
    let pressedKey = String(event.key);
    let letterOnly = pressedKey.match(/[a-z]/gi);
    // let letterOnly = pressedKey.match(/[a-z]/gi);
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
    }
     else {
    //  letter only doesn't console.log other keys but is still adding to box!
     let letterOnly = pressedKey.match(/[a-z]/gi)
     if (!letterOnly) {
    
      //  $("#" + box).text("");
      console.log("not a string");
      currentTry.pop(pressedKey);
     } else {
      addLetters(pressedKey);
     }}
    }
    )} ;
  
 startGame();
  
function addLetters(pressedKey) {
  // let letterOnly = pressedKey.match(/[a-z]/gi)

  if (nextLetter === 5) {
    return };

    // if (pressedKey === "Backspace") {
    //   console.log("test");
    //   currentTry.pop(pressedKey);
      // nextLetter -=1;
    
    // else if (!letterOnly) {
    //   console.log("not valid letter");
      // pressedKey = "";

    pressedKey = pressedKey.toUpperCase();
   $("#" + box).each(function () {

    if(pressedKey === "Backspace") {
      // nextLetter -= 1;
      console.log("Line 109");
    }

    else {


   $(this).text(pressedKey);
   
   //ADD CLASS FOR GREEN BOX (MATCHED)
   console.log(pressedKey);
   currentTry.push(pressedKey);
   nextLetter += 1;
   
   }})}
 ;


     
// Delete letter if backspace is pressed not working
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
  //  $(".box").each(function () {
  //   $(this).prev().focus();
  // console.log("Got to function deleteLetter.");
  //  }); 

  //  console.log($(this).text(""));
  // for (let i = 0; i < 6; i--) {
  //   $("#" + box[i]).focus();
  // }
  
  // console.log(box);
  // console.log($(this).attr("id"));
// $("#1").focus();
// console.log($("#1"));




function check() {
  let row = $(".row")[6 - remaining];
  let guessLetter = "";
  let rightGuess = Array.from(rightLetter);

for (let val of currentTry) {
  guessLetter+= val
}
//HERE FOR -5

// if (guessLetter !=5) {
//   console.log("NEED 5 LETTERS, YOU ENTERED " + guessLetter);
//   // change above later to append text
//   return;
// }

// HERE END FOR -5

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
    // $(".row").next("id").focus();

}

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

function endGame() {
  $(".endgame-overlay, .endgame-content").addClass("active");
  $(".right-word").text(rightLetter);
  
  // $(".close, .endgame-overlay").on("click", function () {
  //   $(".endgame-overlay, .endgame-content").removeClass("active");
  // });
}
function lostGame() {
  $(".endgame-overlay, .lost-content").addClass("active");
}

  // $(".endgame-overlay, .endgame-content").removeClass("active");

  $(".restart-btn").on("click", function () {
    setTimeout(function () {
      window.location.reload();
    }, 100);
    // location.reload(true);
  });
  // $("#restart-btn").click(function() {
  //   location.reload(true);
  // });




// $(".restart-btn, endgame-overlay")on("click", function() {
//   $(".endgame-overlay, .endgame-content").addClass("active");
// })