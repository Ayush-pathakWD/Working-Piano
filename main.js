let sounds = {
  "C2": new Audio("sounds/C2.mp3"),
  "D2": new Audio("sounds/D2.mp3"),
  "E2": new Audio("sounds/E2.mp3"),
  "F2": new Audio("sounds/F2.mp3"),
  "G2": new Audio("sounds/G2.mp3"),
  "A2": new Audio("sounds/A2.mp3"),
  "B2": new Audio("sounds/B2.mp3"),
  "C#2": new Audio("sounds/C%232.mp3"),
  "D#2": new Audio("sounds/D%232.mp3"),
  "F#2": new Audio("sounds/F%232.mp3"),
  "G#2": new Audio("sounds/G%232.mp3"),
  "A#2": new Audio("sounds/A%232.mp3"),
  "C3": new Audio("sounds/C3.mp3"),
  "D3": new Audio("sounds/D3.mp3"),
  "E3": new Audio("sounds/E3.mp3"),
  "F3": new Audio("sounds/F3.mp3"),
  "G3": new Audio("sounds/G3.mp3"),
  "A3": new Audio("sounds/A3.mp3"),
  "B3": new Audio("sounds/B3.mp3"),
  "C#3": new Audio("sounds/C%233.mp3"),
  "D#3": new Audio("sounds/D%233.mp3"),
  "F#3": new Audio("sounds/F%233.mp3"),
  "G#3": new Audio("sounds/G%233.mp3"),
  "A#3": new Audio("sounds/A%233.mp3"),
  "C4": new Audio("sounds/C4.mp3"),
  "D4": new Audio("sounds/D4.mp3"),
  "E4": new Audio("sounds/E4.mp3"),
  "F4": new Audio("sounds/F4.mp3"),
  "G4": new Audio("sounds/G4.mp3"),
  "A4": new Audio("sounds/A4.mp3"),
  "B4": new Audio("sounds/B4.mp3"),
  "C#4": new Audio("sounds/C%234.mp3"),
  "D#4": new Audio("sounds/D%234.mp3"),
  "F#4": new Audio("sounds/F%234.mp3"),
  "G#4": new Audio("sounds/G%234.mp3"),
  "A#4": new Audio("sounds/A%234.mp3")
};
let pianoKeys = document.querySelectorAll(".key");
pianoKeys.forEach(key => {
  key.addEventListener("click", function(dets){
    let pressed = key.dataset.note;
    if(sounds[pressed]){
      sounds[pressed].currentTime = 0; 
      sounds[pressed].play();
    }
  })
});

// /\
// ||
// ||
// WORK ON CLICKING

//WORK ON KEYBOARD PRESS
// ||
// ||
// \/

const KEY_MAPPING = {
    //White Keys
    "KeyQ": "C2",
    "KeyW": "D2",
    "KeyE": "E2",
    "KeyR": "F2",
    "KeyT": "G2",
    "KeyY": "A2",
    "KeyU": "B2",
    "KeyI": "C3",
    "KeyO": "D3",
    "KeyP": "E3",
    "KeyA": "F3",
    "KeyS": "G3",
    "KeyD": "A3",
    "KeyF": "B3",
    "KeyG": "C4",
    "KeyH": "D4",
    "KeyJ": "E4",
    "KeyK": "F4",
    "KeyL": "G4",
    "Semicolon": "A4",
    "Quote": "B4",
    //Black Keys
    "Digit1": "C#2",
    "Digit2": "D#2",
    "Digit3": "F#2",
    "Digit4": "G#2",
    "Digit5": "A#2",
    "Digit6": "C#3",
    "Digit7": "D#3",
    "Digit8": "F#3",
    "Digit9": "G#3",
    "Digit0": "A#3",
    "KeyZ": "C#4",
    "KeyX": "D#4",
    "KeyC": "F#4",
    "KeyV": "G#4",
    "KeyB": "A#4"
};
// document.body.addEventListener("keydown", function (dets) {
//   let keyPressed = dets.code;
//   console.log(keyPressed);
//   if(keyPressed === "KeyQ") sounds["C2"].play();
//   if(keyPressed === "KeyW") sounds["D2"].play();
//   if(keyPressed === "KeyE") sounds["E2"].play();
//   if(keyPressed === "KeyR") sounds["F2"].play();
//   if(keyPressed === "KeyT") sounds["G2"].play();
//   if(keyPressed === "KeyY") sounds["A2"].play();
//   if(keyPressed === "KeyU") sounds["B2"].play();
//   if(keyPressed === "KeyI") sounds["C3"].play();
//   if(keyPressed === "KeyO") sounds["D3"].play();
//   if(keyPressed === "KeyP") sounds["E3"].play();
//   if(keyPressed === "KeyA") sounds["F3"].play();
//   if(keyPressed === "KeyS") sounds["G3"].play();
//   if(keyPressed === "KeyD") sounds["A3"].play();
//   if(keyPressed === "KeyF") sounds["B3"].play();
//   if(keyPressed === "KeyG") sounds["C4"].play();
//   if(keyPressed === "KeyH") sounds["D4"].play();
//   if(keyPressed === "KeyJ") sounds["E4"].play();
//   if(keyPressed === "KeyK") sounds["F4"].play();
//   if(keyPressed === "KeyL") sounds["G4"].play();
//   if(keyPressed === "Semicolon") sounds["A4"].play();
//   if(keyPressed === "Quote") sounds["B4"].play();
//   if(keyPressed === "Digit1") sounds["C#2"].play();
//   if(keyPressed === "Digit2") sounds["D#2"].play();
//   if(keyPressed === "Digit3") sounds["F#2"].play();
//   if(keyPressed === "Digit4") sounds["G#2"].play();
//   if(keyPressed === "Digit5") sounds["A#2"].play();
//   if(keyPressed === "Digit6") sounds["C#3"].play();
//   if(keyPressed === "Digit7") sounds["D#3"].play();
//   if(keyPressed === "Digit8") sounds["F#3"].play();
//   if(keyPressed === "Digit9") sounds["G#3"].play();
//   if(keyPressed === "Digit0") sounds["A#3"].play();
//   if(keyPressed === "KeyZ") sounds["C#3"].play();
//   if(keyPressed === "KeyX") sounds["D#4"].play();
//   if(keyPressed === "KeyC") sounds["F#4"].play();
//   if(keyPressed === "KeyV") sounds["G#4"].play();
//   if(keyPressed === "KeyB") sounds["A#4"].play();
// });

document.body.addEventListener("keydown", function (dets) {
    const keyPressed = dets.code;
    if (KEY_MAPPING.hasOwnProperty(keyPressed) && !dets.repeat) {
      const note = KEY_MAPPING[keyPressed];
      const keyElement = document.querySelector(`.key[data-note="${note}"]`);
      if (keyElement) {
        keyElement.classList.add('active');
      }
      if (sounds[note]) {
        sounds[note].currentTime = 0; 
        sounds[note].play();
      }
    }
});
document.body.addEventListener("keyup", function (dets) {
    const keyPressed = dets.code;
    if (KEY_MAPPING.hasOwnProperty(keyPressed) && !dets.repeat) {
      const note = KEY_MAPPING[keyPressed];
      const keyElement = document.querySelector(`.key[data-note="${note}"]`);
        if (keyElement) {
          keyElement.classList.remove('active');
        }
    }
});