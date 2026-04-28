/*
handles flashcard mode - user can view words,flip cards,
hear pronunciation

*/

//  FLASHCARD MODE 
let flashcardIndex = 0;    // which card we are currently on
let isFlipped = false;     // is the card currently flipped?

//  START FLASHCARDS - start flashcard and show first word
function startFlashcards() {
  currentMode = 'flashcard';
  flashcardIndex = 0;
  isFlipped = false;

  showScreen('screen-flashcard'); // show flashcard screen
  renderFlashcard(); // show first card
}

//  RENDER CURRENT CARD - show current word, reset card, speak it
function renderFlashcard() {
  //get current word from list ->
  const word = sessionWords[flashcardIndex];
  // total no. of cards ->
  const total = sessionWords.length;

  // update counter - shows-> 1/8, 2/8,...,8/8
  document.getElementById('fc-counter').textContent
    = `${flashcardIndex + 1} / ${total}`;

  // update the text on both sides of the card
  document.getElementById('fc-german').textContent = word.german;
  document.getElementById('fc-meaning').textContent = word.meaning;

  // always start from front side
  isFlipped = false;
  document.getElementById('flashcard').classList.remove('flipped');

  // speak the german word automatically
  speak(word.german);
}

//  FLIP THE CARD - called when user clicks the card
function flipCard() {
  // select card element ->
  const card = document.getElementById('flashcard');

  // if back side is showing ->
  if (isFlipped) {
    card.classList.remove('flipped'); 
    isFlipped = false;  // flip back to front
  } else {
    card.classList.add('flipped'); 
    isFlipped = true;  // flip front to back
  }
}

// NAVIGATION - next card
function nextCard() {
  // check if not last card
  if (flashcardIndex < sessionWords.length - 1) {
    flashcardIndex++; // move to nect card
    renderFlashcard(); // show next word
  } else {
    // Reached the last card —> go home
    goHome();
  }
}

function prevCard() {
  if (flashcardIndex > 0) { //check not first card
    flashcardIndex--;
    renderFlashcard();  // go back to prev card
  }
  // if already on first card, do nothing
}

//  KEYBOARD SUPPORT
// Arrow keys to navigate, Space to flip
document.addEventListener('keydown', (e) => {
  // get flashcard screen
  const fcScreen = document.getElementById('screen-flashcard');

  // if not on flashcard screen -> do nothing
  if (!fcScreen.classList.contains('active')) return;

  if (e.key === 'ArrowRight') nextCard();
  if (e.key === 'ArrowLeft') prevCard();
  if (e.key === ' ') {
    e.preventDefault(); // prevents page from scrolling on Space
    flipCard();
  }
});
