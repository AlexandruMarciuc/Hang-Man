"use strict";

const lettersDiv = document.querySelector(".letters");
//  Access the child li elements
const letterItems = lettersDiv.querySelectorAll("li");
const word = document.querySelector("#my-word");
const wordElements = word.getElementsByTagName("li");
const lives = document.querySelector("#mylives");
const clue = document.querySelector("#clue");
const hintReset = document.querySelector(".container");
const hint = document.getElementById("hint");
const playAgain = document.getElementById("playAgain");
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const cuvinteHangman = [
  "masina",
  "telefon",
  "calculator",
  "monitor",
  "castel",
  "pisica",
  "caine",
  "munte",
  "apa",
  "soare",
  "luna",
  "stea",
  "floare",
  "carte",
  "creion",
  "copil",
  "parinte",
  "bunica",
  "masa",
  "scaun",
  "birou",
  "geanta",
  "fruct",
  "leguma",
  "cuvant",
  "pagina",
  "cer",
  "pamant",
  "marea",
  "lacul",
  "padurea",
  "oras",
  "sat",
  "strada",
  "bucatarie",
  "dormitor",
  "baie",
  "garderoba",
  "haina",
  "incaltaminte",
  "umbrela",
  "ferestre",
  "usa",
  "cheie",
  "flaut",
  "chitara",
  "pian",
  "tricou",
  "bluza",
  "fusta",
  "pantaloni",
  "cizme",
  "papuci",
  "ochi",
  "nas",
  "gura",
  "ureche",
  "mana",
  "picior",
  "cap",
  "gat",
  "spate",
  "picioare",
  "deget",
  "unghie",
  "zambet",
  "planset",
  "masa",
  "aragaz",
  "frigider",
  "microunde",
  "televizor",
  "internet",
  "mouse",
  "tastatura",
  "telecomanda",
  "casti",
  "radioul",
  "harta",
  "busola",
  "fotografie",
  "hartie",
  "creion",
  "carnet",
  "penar",
  "avion",
  "bicicleta",
  "lanterna",
  "ceas",
  "ochelari",
  "rucsac",
  "umbrela",
  "bilet",
  "pasaport",
  "bancnota",
  "moneda",
  "cutie",
  "clopot",
  "oglinda",
  "bijuterii",
  "palarie",
  "toba",
];

const indiciiCuvinteHangman = [
  "Are patru roți.",
  "Poți vorbi la el.",
  "Folosit pentru calcule.",
  "Ecran de afișare.",
  "Clădire veche fortificată.",
  "Felină domestică.",
  "Cel mai bun prieten al omului",
  "Formațiune înaltă de teren.",
  "Lichid esențial pentru viață.",
  "Stea centrală a sistemului nostru solar.",
  "Satelit natural al Pământului.",
  "Obiect ceresc strălucitor.",
  "Plantă cu flori frumoase.",
  "Obiect pentru citit.",
  "Instrument de scris.",
  "Persoană tânără.",
  "Mama sau tatal cuiva.",
  "Mama tatalui sau a mamei cuiva.",
  "Mobilier pentru mâncare.",
  "Mobilier pentru așezat.",
  "Mobilier pentru lucru sau studiu.",
  "Folosită pentru transportul obiectelor.",
  "Aliment delicios și sănătos.",
  "Aliment sănătos.",
  "Grup de litere cu sens.",
  "Parte a unei cărți sau a unui document.",
  "Partea de sus a atmosferei Pământului.",
  "Planeta pe care trăim.",
  "Masă de apă sărată.",
  "Masă de apă dulce.",
  "Zonă cu copaci și vegetație densă.",
  "Zonă urbană.",
  "Zonă rurală.",
  "Drum public între clădiri.",
  "Locul unde gătim.",
  "Locul unde dormim.",
  "Locul unde ne spălăm.",
  "Locul unde păstrăm hainele.",
  "Piesă de îmbrăcăminte.",
  "Piesă de îmbrăcăminte pentru picioare.",
  "Folosită pentru protecție împotriva ploii.",
  "Deschidere în perete pentru lumină și aer.",
  "Folosită pentru a intra și ieși dintr-o cameră.",
  "Folosită pentru a deschide o încuietoare.",
  "Instrument muzical de suflat.",
  "Instrument muzical cu corzi.",
  "Instrument muzical cu taste.",
  "Piesă de îmbrăcăminte pentru partea superioară a corpului.",
  "Piesă de îmbrăcăminte pentru femei.",
  "Piesă de îmbrăcăminte pentru femei.",
  "Piesă de îmbrăcăminte pentru partea inferioară a corpului.",
  "Tip de încălțăminte.",
  "Încălțăminte lejeră.",
  "Organ de vedere.",
  "Organ de simț pentru miros.",
  "Organ pentru mâncare și vorbire.",
  "Organ de simț pentru auz.",
  "Parte a corpului pentru folosirea obiectelor.",
  "Parte a corpului pentru mers și alergat.",
  "Partea de sus a corpului.",
  "Partea care leagă capul de corp.",
  "Partea din spate a corpului.",
  "Partea inferioară a corpului.",
  "Parte a mâinii sau a piciorului.",
  "Crescutura de la capătul degetelor.",
  "Expresie facială fericită.",
  "Dispozitiv electronic pentru desenat sau notat.",
  "Mobilier pentru mâncare.",
  "Folosit pentru gătit.",
  "Folosit pentru a răci alimentele.",
  "Dispozitiv pentru încălzirea alimentelor.",
  "Dispozitiv pentru a viziona programe TV.",
  "Rețea globală de comunicare.",
  "Dispozitiv de control pentru computer.",
  "Dispozitiv pentru tastarea textului pe computer.",
  "Folosită pentru a controla dispozitive.",
  "Dispozitiv pentru ascultarea sunetului.",
  "Folosită pentru a controla dispozitive.",
  "Dispozitiv pentru ascultarea posturilor de radio.",
  "Hartă geografică sau schematică.",
  "Folosită pentru a găsi direcția.",
  "Imagine capturată cu aparat foto.",
  "Material pentru scriere și desen.",
  "Instrument de scris.",
  "Jurnal pentru notițe.",
  "Geantă pentru instrumente de scris.",
  "Mijloc de transport aerian.",
  "Mijloc de transport cu două roți.",
  "Dispozitiv pentru a emite lumină.",
  "Dispozitiv pentru a măsura timpul.",
  "Dispozitiv pentru a corecta vederea.",
  "Geantă pentru transportul lucrurilor.",
  "Folosită pentru protecție împotriva ploii.",
  "Bilet pentru eveniment sau călătorie.",
  "Document pentru călătorii internaționale.",
  "Hârtie valorică pentru bani.",
  "Monedă utilizată ca bani.",
  "Recipient pentru depozitare.",
  "Obiect pentru sunete.",
  "Folosită pentru a vedea reflecția.",
  "Accesorii decorative.",
  "Articol de îmbrăcăminte pentru cap.",
  "Instrument de percuție.",
];

const bluePrint = `<li>_</li>`;
// Generate a random index within the length of the array
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * cuvinteHangman.length);

  // Use the random index to get a word from the array
  const randomWord = cuvinteHangman[randomIndex];
  const index = randomIndex;
  const array = [randomWord, index];
  return array;
}

// functions for the hangman drawing

function hangmanPart1() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();
}
function hangmanPart2() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();
}
function hangmanPart3() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();
}
function hangmanPart4() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();
}
function hangmanPart5() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();
}
function hangmanPart6() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // fifth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();
}
function hangmanPart7() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // fifth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();
}
function hangmanPart8() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // fifth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(90, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();
}
function hangmanPart9() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // fifth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(90, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // eight path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(88, 130);
  ctx.lineTo(70, 90);
  ctx.stroke();
}
function hangmanPart10() {
  // First path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(5, 145);
  ctx.lineTo(250, 145);
  ctx.stroke();

  // second path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(15, 145);
  ctx.lineTo(15, 5);
  ctx.stroke();

  // third path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(9, 12);
  ctx.lineTo(110, 11);
  ctx.stroke();

  // forht path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 12);
  ctx.lineTo(70, 20);
  ctx.stroke();

  // circle
  ctx.beginPath();
  ctx.arc(70, 30, 10, 0, 2 * Math.PI);
  ctx.stroke();

  // fifth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(70, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // sixth path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(90, 90);
  ctx.lineTo(70, 40);
  ctx.stroke();

  // eight path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(88, 130);
  ctx.lineTo(70, 90);
  ctx.stroke();

  // eight path
  ctx.beginPath();
  ctx.strokeStyle = "black";
  ctx.moveTo(50, 130);
  ctx.lineTo(70, 90);
  ctx.stroke();
}

//declaring the random generated word and destructuring it
let [theRandomWord, randomIndex] = getRandomWord();
theRandomWord = theRandomWord.toUpperCase();
let randomWordArray = [...theRandomWord];
// keeping track of the lives
let livesDisplayed = 10;
// declaring the unique letters that have to be guessed
let uniqueSet = new Set(randomWordArray);
let uniqueArray = [...uniqueSet];
// declaring an array push the guessed letters
let allLettersArray = [];
console.log(allLettersArray);
// insert bluePrint for each letter in the random word
for (let i = 0; i < randomWordArray.length; i++) {
  word.insertAdjacentHTML("afterbegin", bluePrint);
}

//Looping trough the letters
letterItems.forEach((letterItem, index) => {
  letterItem.addEventListener("click", function () {
    const clickedLetter = letterItem.textContent;
    let guessedCorrectly = false;
    //updating the word if it includes the clicked letter

    for (let i = 0; i < randomWordArray.length; i++) {
      if (randomWordArray[i] === clickedLetter) {
        wordElements[i].textContent = clickedLetter;
        guessedCorrectly = true;
      }
    }

    //Updating lives

    if (
      !guessedCorrectly &&
      livesDisplayed > 0 &&
      lives.textContent !== "You WON !!"
    ) {
      livesDisplayed -= 1;
    }

    lives.textContent = `You have ${livesDisplayed} lives!`;

    if (lives.textContent === "You have 0 lives!") {
      lives.textContent = "Game Over";
    }

    // check if all letters have been guessed

    for (let i = 0; i < uniqueArray.length; i++) {
      if (
        uniqueArray[i] === clickedLetter &&
        !allLettersArray.includes(clickedLetter)
      ) {
        allLettersArray.push(clickedLetter);
        console.log(allLettersArray);
        console.log(allLettersArray.length, uniqueArray.length);
      }

      if (allLettersArray.length === uniqueArray.length) {
        lives.textContent = "You WON !!";
      }
    }

    if (livesDisplayed === 9) {
      hangmanPart1();
    }
    if (livesDisplayed === 8) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart2();
    }
    if (livesDisplayed === 7) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart3();
    }
    if (livesDisplayed === 6) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart4();
    }
    if (livesDisplayed === 5) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart5();
    }
    if (livesDisplayed === 4) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart6();
    }
    if (livesDisplayed === 3) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart7();
    }
    if (livesDisplayed === 2) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart8();
    }
    if (livesDisplayed === 1) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart9();
    }
    if (livesDisplayed === 0) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hangmanPart10();
    }
  });
});

hint.addEventListener("click", function () {
  clue.textContent = indiciiCuvinteHangman[randomIndex];
  clue.style.visibility = "visible";
});

playAgain.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  livesDisplayed = 10;
  lives.textContent = `You have ${livesDisplayed} lives!`;
  clue.style.visibility = "hidden";
  allLettersArray = [];
  const [newRandomWord, newIndex] = getRandomWord();
  randomIndex = newIndex;
  theRandomWord = newRandomWord.toUpperCase();
  randomWordArray = [...theRandomWord];
  uniqueSet = new Set(newRandomWord.toUpperCase());
  uniqueArray = [...uniqueSet]; // Reset uniqueLettersArray

  console.log(uniqueArray);
  // Clear the existing word in the UI
  word.innerHTML = "";
  clue.innerHTML = "to fill the space";
  console.log(newRandomWord);
  // Insert the new bluePrint for each letter in the random word
  for (let i = 0; i < randomWordArray.length; i++) {
    word.insertAdjacentHTML("afterbegin", bluePrint);
  }
});
