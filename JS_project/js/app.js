/* 
THIS FILE INCLUDES - main logic, session management, 
screen navigation, result calculation, word selection
*/

let sessionWords = [];      
let sessionScore = 0;       
let sessionMistakes = [];   
let currentMode = '';       


// ===============================
// SCREEN NAVIGATION
// ===============================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function goHome() {
  showScreen('screen-home');
}


// ===============================
// SPEECH FUNCTION
// ===============================
function speak(text) {
  return new Promise((resolve) => {
    if (!window.speechSynthesis) { resolve(); return; }
    window.speechSynthesis.cancel();

    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'de-DE';
    utt.rate = 0.85;

    utt.onend = resolve;
    utt.onerror = resolve;

    window.speechSynthesis.speak(utt);
  });
}


// ===============================
// CHECK ANSWER
// ===============================
function checkAnswer(input, correct) {
  return input.trim().toLowerCase() === correct.trim().toLowerCase();
}


// ===============================
// 🔥 FETCH WORDS FROM BACKEND
// ===============================
async function getWordsFromBackend() {
  try {
    const res = await fetch('http://localhost:3000/api/words');
    const data = await res.json();

    // pick only 8 words
    return data.slice(0, 8);

  } catch (error) {
    console.error("Error fetching words:", error);
    return [];
  }
}


// ===============================
// RESULTS
// ===============================
function showResults() {
  const total = sessionWords.length;
  const percentage = Math.round((sessionScore / total) * 100);

  document.getElementById('res-score').textContent = percentage + '%';
  document.getElementById('res-correct').textContent = sessionScore;
  document.getElementById('res-wrong').textContent = sessionMistakes.length;
  document.getElementById('res-total').textContent = total;

  let grade = '';
  if (percentage === 100) grade = 'Perfect Score!';
  else if (percentage >= 75) grade = 'Good job!';
  else if (percentage >= 50) grade = 'Keep practicing!';
  else grade = 'Review these words again.';

  document.getElementById('res-grade').textContent = grade;

  const list = document.getElementById('res-mistakes-list');
  list.innerHTML = '';

  if (sessionMistakes.length > 0) {
    document.getElementById('res-mistakes-section').style.display = 'block';

    sessionMistakes.forEach(m => {
      const item = document.createElement('div');
      item.className = 'mistake-item';

      item.innerHTML = `
        <div>
          <div class="mistake-de">${m.german}</div>
          <div class="mistake-en">correct: ${m.meaning}</div>
        </div>
        <div class="your-answer">you wrote: "${m.yourAnswer}"</div>
      `;

      list.appendChild(item);
    });

  } else {
    document.getElementById('res-mistakes-section').style.display = 'none';
  }

  // OPTIONAL: send result to backend
  fetch('http://localhost:3000/api/result', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      score: sessionScore,
      total: sessionWords.length
    })
  });

  showScreen('screen-results');
}


// ===============================
// RESTART
// ===============================
function restartSameMode() {
  if (currentMode === 'dictation') startDictation();
  else if (currentMode === 'flashcard') startFlashcards();
}


// ===============================
// 🚀 APP START (UPDATED)
// ===============================
window.addEventListener('DOMContentLoaded', async () => {
  sessionWords = await getWordsFromBackend();
  showScreen('screen-home');
});