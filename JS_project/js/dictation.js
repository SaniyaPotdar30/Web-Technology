/*
this file handles dictation mode - input checking,
feedback , correction, mcq based learning 

*/

let dictationIndex = 0;
let needsMeaningMCQ = false; // after mistake, should we ask mcq?
let correctionCount = 0;     // number of times user wrote a word
let correctionTarget = '';   // which word user must repeat

// DICTATION MODE
function startDictation() {  //called when user clicks dictation mode
  currentMode = 'dictation'; // set mode
  dictationIndex = 0;
  sessionScore = 0;
  sessionMistakes = [];
  needsMeaningMCQ = false; // reset mcq flag
  showScreen('screen-dictation'); // open dictation screen 
  renderDictationWord();   // show 1st word
}

// function to - SHOW WORD
function renderDictationWord() {
  const total = sessionWords.length;  // total words
  // to show 1st word out of 8 ->
  document.getElementById('dict-counter').textContent = `Word ${dictationIndex + 1} of ${total}`;
  // show score ->
  document.getElementById('dict-score').textContent = `Score: ${sessionScore}`;
  // update progress bar ->
  document.getElementById('dict-progress').style.width = (dictationIndex / total) * 100 + '%';

  document.getElementById('dict-german-input').value = '';
  document.getElementById('dict-meaning-input').value = '';
  document.getElementById('dict-german-input').className = 'answer-input';
  document.getElementById('dict-meaning-input').className = 'answer-input';
  document.getElementById('dict-feedback').className = 'feedback';
  document.getElementById('dict-feedback').textContent = '';

  // speak word
  speakCurrentWord();
  document.getElementById('dict-german-input').focus();
}

// * function to - SPEAK WORD
// used ASYNC/AWAIT to handle speech before continuing
async function speakCurrentWord() {
  const btn = document.getElementById('speak-btn');
  btn.classList.add('speaking');
  btn.textContent = 'Speaking...';
  await speak(sessionWords[dictationIndex].german); // speak world, wait until finished
  btn.classList.remove('speaking');
  btn.textContent = 'Hear the word';
}

// function to - CHECK ANSWERS
function checkDictationAnswer() {
  const word = sessionWords[dictationIndex]; // current word
  const germanInput = document.getElementById('dict-german-input');
  const meaningInput = document.getElementById('dict-meaning-input');
  const feedback = document.getElementById('dict-feedback');

  // check both answers
  const germanOk = checkAnswer(germanInput.value, word.german);
  const meaningOk = checkAnswer(meaningInput.value, word.meaning);

  // checking if both the word and meaning is correct
  if (germanOk && meaningOk) {
    germanInput.className = 'answer-input correct';
    meaningInput.className = 'answer-input correct';
    feedback.className = 'feedback correct';
    // feedback text ->
    feedback.textContent = `Correct! "${word.german}" means "${word.meaning}"`;
    sessionScore++;
    document.getElementById('dict-score').textContent = `Score: ${sessionScore}`;
    setTimeout(() => moveToNextWord(), 1200); // move after delay

  } else if (!germanOk) {  // word wrong
    germanInput.className = 'answer-input wrong';
    feedback.className = 'feedback wrong';
    feedback.textContent = `The German word was: ${word.german}`;
    needsMeaningMCQ = !meaningOk; // if meaning also wrong -> ask MCQ later
    // store mistake ->
    sessionMistakes.push({ german: word.german, meaning: word.meaning, yourAnswer: germanInput.value || '(empty)' });
    // start writing a word 5 times
    setTimeout(() => startCorrectionDrill(word.german), 2500);

  } else {  // meaning wrong
    meaningInput.className = 'answer-input wrong';
    feedback.className = 'feedback wrong';
    feedback.textContent = `The meaning was not correct.`;
    // store mistake ->
    sessionMistakes.push({ german: word.german, meaning: word.meaning, yourAnswer: meaningInput.value || '(empty)' });
    // show MCQ ->
    setTimeout(() => startMeaningMCQ(word), 2500);
  }
}

// function to - MOVE TO NEXT WORD
function moveToNextWord() {
  needsMeaningMCQ = false;
  dictationIndex++;  // go next
  if (dictationIndex >= sessionWords.length) { // if finished -> show result 
    showResults();
  } else {
    showScreen('screen-dictation');
    renderDictationWord();
  }
}

// * function to - WRITE AN INORRECT WORD FOR 5 TIMES
function startCorrectionDrill(targetWord) {
  correctionTarget = targetWord;
  correctionCount = 0;
  // show word ->
  document.getElementById('correction-target').textContent = targetWord;
  document.getElementById('correction-input').value = '';
  document.getElementById('correction-feedback').className = 'feedback';
  document.getElementById('correction-label').textContent = 'Write it (1 / 5):';
  // reset tick boxes ->
  for (let i = 0; i < 5; i++) {
    document.getElementById(`tick-${i}`).className = 'tick';
    document.getElementById(`tick-${i}`).textContent = i + 1;
  }

  // open correction screen
  showScreen('screen-correction');
  setTimeout(() => speak(targetWord), 300);
  document.getElementById('correction-input').focus();
}

// user must correctly write word 5 times
function checkCorrectionInput() {
  const input = document.getElementById('correction-input');
  const feedback = document.getElementById('correction-feedback');

  if (checkAnswer(input.value, correctionTarget)) {
    document.getElementById(`tick-${correctionCount}`).className = 'tick done';
    document.getElementById(`tick-${correctionCount}`).textContent = '✓';
    correctionCount++;
    input.value = '';
    feedback.className = 'feedback';

    if (correctionCount >= 5) {
      feedback.className = 'feedback correct';
      feedback.textContent = 'Well done! Moving on...';
      setTimeout(() => {
        if (needsMeaningMCQ) startMeaningMCQ(sessionWords[dictationIndex]);
        else moveToNextWord();
      }, 1200);
    } else {
      document.getElementById('correction-label').textContent = `Write it (${correctionCount + 1} / 5):`;
      input.focus();
    }

  } else {
    feedback.className = 'feedback wrong';
    feedback.textContent = `Not quite. The word is: ${correctionTarget}`;
    input.value = '';
    input.focus();
  }
}

// MCQ mode - dynamically generated mcq options 
// using random selection
function startMeaningMCQ(word) {
  // show word ->
  document.getElementById('mcq-word').textContent = word.german;
  document.getElementById('mcq-feedback').className = 'feedback';
  document.getElementById('mcq-feedback').textContent = '';

  const wrongOptions = wordBank
    .filter(w => w.meaning !== word.meaning)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(w => w.meaning);

  const options = [word.meaning, ...wrongOptions].sort(() => Math.random() - 0.5);

  const container = document.getElementById('mcq-options');
  container.innerHTML = '';
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'mcq-option';
    btn.textContent = option;
    btn.onclick = () => handleMCQAnswer(btn, option, word.meaning);
    container.appendChild(btn);
  });

  showScreen('screen-mcq');
}

// HANDLE MCQ answers
function handleMCQAnswer(btn, selected, correct) {
  document.querySelectorAll('.mcq-option').forEach(b => b.disabled = true);
  const feedback = document.getElementById('mcq-feedback');

  if (selected === correct) {
    btn.className = 'mcq-option correct';
    feedback.className = 'feedback correct';
    feedback.textContent = `Correct! That is the right meaning.`;
  } else {
    btn.className = 'mcq-option wrong';
    feedback.className = 'feedback wrong';
    feedback.textContent = `The correct meaning was: "${correct}"`;
    document.querySelectorAll('.mcq-option').forEach(b => {
      if (b.textContent === correct) b.className = 'mcq-option reveal-correct';
    });
  }
  setTimeout(() => moveToNextWord(), 2500); // move next
}

// KEYBOARD SUPPORT 
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  if (document.getElementById('screen-dictation').classList.contains('active')) checkDictationAnswer();
  if (document.getElementById('screen-correction').classList.contains('active')) checkCorrectionInput();
});