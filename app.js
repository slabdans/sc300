let activeQuestions = [];
let currentIndex = 0;
let bookmarkedQuestions = new Set();
let userAnswers = {};
let questionResults = {};
let timerSeconds = 0;
let initialTimerSeconds = 0; // Track starting time to compute duration taken
let timerInterval = null;
let isPaused = false;
let selectedDragCardId = null;

// PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW:
const GOOGLE_SHEET_WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

document.addEventListener("DOMContentLoaded", function () {
  const safeAddListener = (id, event, handler) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener(event, handler);
  };

  if (typeof questions !== "undefined" && Array.isArray(questions) && questions.length > 0) {
    const endInput = document.getElementById("endRange");
    if (endInput) endInput.value = questions.length;
  }

  const savedIndex = localStorage.getItem("sc300_current_index");
  if (savedIndex !== null) {
    currentIndex = parseInt(savedIndex, 10);
  }

  safeAddListener("startBtn", "click", startExam);
  safeAddListener("pauseBtn", "click", togglePause);
  safeAddListener("bookmarkBtn", "click", toggleBookmark);
  safeAddListener("question-select", "change", handleDropdownJump);
  safeAddListener("prevBtn", "click", () => navigateQuestion(-1));
  safeAddListener("nextBtn", "click", () => navigateQuestion(1));
  safeAddListener("submitBtn", "click", handleSubmit);
  safeAddListener("finishBtn", "click", finishExam);
  safeAddListener("restartBtn", "click", restartExam);
});

// Helper function to randomly shuffle an array in-place
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startExam() {
  // Validate participant details before launching exam
  const participantNameEl = document.getElementById("participantName");
  const participantEmailEl = document.getElementById("participantEmail");

  if (participantNameEl && !participantNameEl.value.trim()) {
    alert("Please enter your full name before starting the exam.");
    participantNameEl.focus();
    return;
  }
  if (participantEmailEl && !participantEmailEl.value.trim()) {
    alert("Please enter your email address before starting the exam.");
    participantEmailEl.focus();
    return;
  }

  if (typeof questions === "undefined" || !Array.isArray(questions) || questions.length === 0) {
    alert("Error: questions array is not defined or empty.");
    return;
  }

  const startInput = document.getElementById("startRange");
  const endInput = document.getElementById("endRange");
  const timeInputEl = document.getElementById("timeLimit");
  const shuffleToggle = document.getElementById("shuffleToggle");

  const startNum = startInput ? parseInt(startInput.value, 10) : 1;
  const endNum = endInput ? parseInt(endInput.value, 10) : questions.length;
  const timeInput = timeInputEl ? parseInt(timeInputEl.value, 10) : 0;

  if (isNaN(startNum) || isNaN(endNum) || startNum < 1 || endNum > questions.length || startNum > endNum) {
    alert(`Please enter a valid question range between 1 and ${questions.length}.`);
    return;
  }

  const questionCount = (endNum - startNum) + 1;

  if (shuffleToggle && shuffleToggle.checked) {
    const allQuestionsCopy = [...questions];
    shuffleArray(allQuestionsCopy);
    activeQuestions = allQuestionsCopy.slice(0, questionCount);
  } else {
    activeQuestions = questions.slice(startNum - 1, endNum);
  }

  currentIndex = 0;
  userAnswers = {};
  questionResults = {};

  const setupScreen = document.getElementById("setup-screen");
  const examScreen = document.getElementById("exam-screen");
  if (setupScreen) setupScreen.style.display = "none";
  if (examScreen) examScreen.style.display = "block";

  const pauseBtn = document.getElementById("pauseBtn");
  const timerDisplay = document.getElementById("timer-display");

  if (timeInput > 0) {
    timerSeconds = timeInput * 60;
    initialTimerSeconds = timerSeconds;
    if (pauseBtn) pauseBtn.style.display = "inline-block";
    startTimer();
  } else {
    timerSeconds = 0;
    initialTimerSeconds = 0;
    if (timerDisplay) timerDisplay.textContent = "Untimed";
  }

  populateQuestionDropdown();
  loadQuestion();
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    if (!isPaused) {
      timerSeconds--;
      updateTimerDisplay();

      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        alert("Time limit reached! Submitting your exam.");
        finishExam();
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = String(Math.floor(timerSeconds / 60)).padStart(2, "0");
  const secs = String(timerSeconds % 60).padStart(2, "0");
  const timerDisplay = document.getElementById("timer-display");
  if (timerDisplay) timerDisplay.textContent = `${mins}:${secs}`;
}

function togglePause() {
  isPaused = !isPaused;
  const pauseBtn = document.getElementById("pauseBtn");
  const examArea = document.getElementById("options-container");

  if (isPaused) {
    if (pauseBtn) pauseBtn.textContent = "Resume";
    if (examArea) examArea.style.display = "none";
  } else {
    if (pauseBtn) pauseBtn.textContent = "Pause";
    if (examArea) examArea.style.display = "block";
  }
}

function toggleBookmark() {
  if (!activeQuestions[currentIndex]) return;
  const qId = activeQuestions[currentIndex].id;

  if (bookmarkedQuestions.has(qId)) {
    bookmarkedQuestions.delete(qId);
  } else {
    bookmarkedQuestions.add(qId);
  }
  updateBookmarkButtonState();
  populateQuestionDropdown();
}

function updateBookmarkButtonState() {
  const btn = document.getElementById("bookmarkBtn");
  if (!btn || !activeQuestions[currentIndex]) return;

  const qId = activeQuestions[currentIndex].id;
  if (bookmarkedQuestions.has(qId)) {
    btn.textContent = "🔖 Bookmarked";
    btn.classList.add("bookmarked");
  } else {
    btn.textContent = "🔖 Bookmark";
    btn.classList.remove("bookmarked");
  }
}

function populateQuestionDropdown() {
  const select = document.getElementById("question-select");
  if (!select) return;

  select.innerHTML = "";
  activeQuestions.forEach((q, idx) => {
    const isBookmarked = bookmarkedQuestions.has(q.id) ? " 🔖" : "";
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = `Question ${idx + 1} (ID: #${q.id})${isBookmarked}`;
    if (idx === currentIndex) option.selected = true;
    select.appendChild(option);
  });
}

function handleDropdownJump(e) {
  const targetIndex = parseInt(e.target.value, 10);

  if (targetIndex > currentIndex && !hasUserAnswered()) {
    alert("Please select an answer before proceeding to another question.");
    const select = document.getElementById("question-select");
    if (select) select.value = currentIndex;
    return;
  }

  currentIndex = targetIndex;
  saveCurrentState();
  loadQuestion();
}

function hasUserAnswered() {
  const q = activeQuestions[currentIndex];
  if (!q) return false;

  if (q.type === "single") {
    return document.querySelector('input[name="quiz_choice"]:checked') !== null;
  } else if (q.type === "multiple") {
    return document.querySelectorAll('input[name="quiz_choice"]:checked').length > 0;
  } else if (q.type === "dropdown") {
    const selects = document.querySelectorAll(".inline-select");
    return selects.length > 0 && Array.from(selects).every(s => s.value !== "");
  } else if (q.type === "dragdrop") {
    const zones = document.querySelectorAll(".drop-zone[data-target-id]");
    return zones.length > 0 && Array.from(zones).every(z => z.querySelector(".draggable-card") !== null);
  } else if (q.type === "matrix") {
    if (!Array.isArray(q.rows)) return false;
    return q.rows.every(row => document.querySelector(`input[name="matrix_row_${row.id}"]:checked`) !== null);
  } else if (q.type === "hotspot") {
    const selects = document.querySelectorAll(".inline-select");
    if (selects.length > 0) {
      return Array.from(selects).every(s => s.value !== "");
    }
    if (!q.answer || typeof q.answer !== "object") return false;
    return Object.keys(q.answer).every(key => document.querySelector(`input[name="${key}"]:checked`) !== null);
  }
  return false;
}

function navigateQuestion(direction) {
  if (direction > 0 && !hasUserAnswered()) {
    alert("Please select an answer before moving to the next question.");
    return;
  }

  const targetIndex = currentIndex + direction;
  if (targetIndex >= 0 && targetIndex < activeQuestions.length) {
    currentIndex = targetIndex;
    saveCurrentState();
    loadQuestion();
  }
}

function saveCurrentState() {
  localStorage.setItem("sc300_current_index", currentIndex);
}

function loadQuestion() {
  const q = activeQuestions[currentIndex];
  if (!q) return;

  selectedDragCardId = null;
  const qContainer = document.getElementById("question-text");
  const optsContainer = document.getElementById("options-container");
  const expBox = document.getElementById("explanation-box");

  if (qContainer) qContainer.innerHTML = q.question || "";
  if (optsContainer) optsContainer.innerHTML = "";
  if (expBox) expBox.style.display = "none";

  const qSelect = document.getElementById("question-select");
  if (qSelect) qSelect.value = currentIndex;

  const qCountText = document.getElementById("question-count-text");
  if (qCountText) qCountText.textContent = `Question ${currentIndex + 1} of ${activeQuestions.length} (ID: #${q.id})`;

  const prevBtn = document.getElementById("prevBtn");
  if (prevBtn) prevBtn.disabled = currentIndex === 0;

  const isLastQuestion = currentIndex === activeQuestions.length - 1;
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.style.display = isLastQuestion ? "none" : "inline-block";

  const finishBtn = document.getElementById("finishBtn");
  if (finishBtn) finishBtn.style.display = isLastQuestion ? "inline-block" : "none";

  updateBookmarkButtonState();

  if (!optsContainer) return;

  if (q.type === "single" && Array.isArray(q.options)) {
    q.options.forEach((opt, idx) => {
      optsContainer.innerHTML += `
        <label class="option-row">
          <input type="radio" name="quiz_choice" value="${idx}"> ${opt}
        </label>`;
    });
  } 
  else if (q.type === "multiple" && Array.isArray(q.options)) {
    q.options.forEach((opt, idx) => {
      optsContainer.innerHTML += `
        <label class="option-row">
          <input type="checkbox" name="quiz_choice" value="${idx}"> ${opt}
        </label>`;
    });
  }
  else if (q.type === "dragdrop" && Array.isArray(q.items)) {
    let html = `
      <p style="font-size:13px; color:#555; margin-bottom:10px;">
        💡 <strong>Instruction:</strong> Click an action below to select it, then click an answer step to place it (or press Enter/Space).
      </p>
      <div class="drag-drop-wrapper" style="display:flex; gap:20px; align-items:flex-start;">
        <div class="drag-panel" style="flex:1;">
          <p><strong>Actions (Click to select):</strong></p>
          <div id="source-pool" class="drop-zone" style="min-height:120px; padding:8px; border:1px solid #ccc; background:#f9f9f9; border-radius:4px;">`;

    q.items.forEach(item => {
      html += `
        <div class="draggable-card" tabindex="0" id="${item.id}" style="padding:8px 12px; margin-bottom:8px; background:#fff; border:1px solid #0066cc; border-radius:4px; cursor:pointer; user-select:none;">
          ${item.text}
        </div>`;
    });

    html += `
          </div>
        </div>
        <div class="drag-panel" style="flex:1;">
          <p><strong>Answer Area (Click to place):</strong></p>`;

    if (Array.isArray(q.targets)) {
      q.targets.forEach(target => {
        html += `
          <div style="font-size:13px; font-weight:600; margin-top:8px; margin-bottom:4px;">${target.label}</div>
          <div class="drop-zone" tabindex="0" data-target-id="${target.id}" style="min-height:42px; border:2px dashed #0066cc; border-radius:4px; padding:6px; background:#fff; cursor:pointer;"></div>`;
      });
    }

    html += `</div></div>`;
    optsContainer.innerHTML = html;
    initClickToAssign();
  }
  else if (q.type === "matrix" && Array.isArray(q.rows)) {
    let html = `<table class="matrix-table" style="width:100%; border-collapse: collapse; margin-top: 15px;">
                  <thead>
                    <tr style="border-bottom: 2px solid #ddd; text-align: left;">
                      <th style="padding: 8px;">Statements</th>
                      <th style="padding: 8px; text-align: center; width: 80px;">Yes</th>
                      <th style="padding: 8px; text-align: center; width: 80px;">No</th>
                    </tr>
                  </thead>
                  <tbody>`;

    q.rows.forEach(row => {
      html += `
        <tr style="border-bottom: 1px solid #eee;" id="row_${row.id}">
          <td style="padding: 10px; font-size: 14px;">${row.label}</td>
          <td style="text-align: center;"><input type="radio" name="matrix_row_${row.id}" value="0"></td>
          <td style="text-align: center;"><input type="radio" name="matrix_row_${row.id}" value="1"></td>
        </tr>`;
    });

    html += `</tbody></table>`;
    optsContainer.innerHTML = html;
  }
}

function initClickToAssign() {
  const cards = document.querySelectorAll(".draggable-card");
  const dropZones = document.querySelectorAll(".drop-zone");

  cards.forEach(card => {
    const handleCardClick = (e) => {
      e.stopPropagation();
      cards.forEach(c => c.style.outline = "none");

      if (selectedDragCardId === card.id) {
        selectedDragCardId = null;
      } else {
        selectedDragCardId = card.id;
        card.style.outline = "3px solid #ff9900";
      }
    };

    card.addEventListener("click", handleCardClick);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCardClick(e);
      }
    });
  });

  dropZones.forEach(zone => {
    const handleZoneClick = () => {
      if (!selectedDragCardId || zone.id === "source-pool") return;

      const selectedCard = document.getElementById(selectedDragCardId);
      if (!selectedCard) return;

      zone.innerHTML = "";

      const clonedCard = selectedCard.cloneNode(true);
      clonedCard.style.outline = "none";
      clonedCard.removeAttribute("tabindex");

      zone.appendChild(clonedCard);

      selectedCard.style.outline = "none";
      selectedDragCardId = null;
    };

    zone.addEventListener("click", handleZoneClick);
    zone.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleZoneClick();
      }
    });
  });
}

function handleSubmit(e) {
  if (e) e.preventDefault();

  if (!hasUserAnswered()) {
    alert("Please select an answer before submitting.");
    return;
  }

  const q = activeQuestions[currentIndex];
  if (!q) return;

  let isCorrect = false;

  document.querySelectorAll(".option-row").forEach(row => {
    row.classList.remove("correct", "incorrect");
  });

  if (q.type === "single") {
    const selected = document.querySelector('input[name="quiz_choice"]:checked');
    if (selected) {
      const selectedIndex = parseInt(selected.value, 10);
      const selectedRow = selected.closest("label.option-row");

      if (selectedIndex === q.answer) {
        isCorrect = true;
        if (selectedRow) selectedRow.classList.add("correct");
      } else {
        if (selectedRow) selectedRow.classList.add("incorrect");
        const correctInput = document.querySelector(`input[name="quiz_choice"][value="${q.answer}"]`);
        if (correctInput) {
          const correctRow = correctInput.closest("label.option-row");
          if (correctRow) correctRow.classList.add("correct");
        }
      }
    }
  } 
  else if (q.type === "multiple" && Array.isArray(q.answer)) {
    const checkedInputs = Array.from(document.querySelectorAll('input[name="quiz_choice"]:checked'));
    const selectedIndices = checkedInputs.map(el => parseInt(el.value, 10));

    isCorrect = selectedIndices.length === q.answer.length && selectedIndices.every(val => q.answer.includes(val));

    checkedInputs.forEach(input => {
      const val = parseInt(input.value, 10);
      const row = input.closest("label.option-row");
      if (q.answer.includes(val)) {
        if (row) row.classList.add("correct");
      } else {
        if (row) row.classList.add("incorrect");
      }
    });

    q.answer.forEach(correctIdx => {
      const input = document.querySelector(`input[name="quiz_choice"][value="${correctIdx}"]`);
      if (input && !input.checked) {
        const row = input.closest("label.option-row");
        if (row) row.classList.add("correct");
      }
    });
  } 
  else if (q.type === "dropdown") {
    isCorrect = true;
    for (let key in q.answer) {
      const selectEl = document.querySelector(`.inline-select[data-key="${key}"]`);
      if (selectEl) {
        if (selectEl.value === q.answer[key]) {
          selectEl.style.borderColor = "#28a745";
          selectEl.style.backgroundColor = "#d4edda";
        } else {
          selectEl.style.borderColor = "#dc3545";
          selectEl.style.backgroundColor = "#f8d7da";
          isCorrect = false;
        }
      }
    }
  } 
  else if (q.type === "dragdrop") {
    isCorrect = true;
    for (let targetId in q.answer) {
      const zone = document.querySelector(`.drop-zone[data-target-id="${targetId}"]`);
      const childCard = zone ? zone.querySelector(".draggable-card") : null;

      if (childCard && childCard.id === q.answer[targetId]) {
        if (zone) {
          zone.style.borderColor = "#28a745";
          zone.style.backgroundColor = "#d4edda";
        }
      } else {
        if (zone) {
          zone.style.borderColor = "#dc3545";
          zone.style.backgroundColor = "#f8d7da";
        }
        isCorrect = false;
      }
    }
  }
  else if (q.type === "matrix" && Array.isArray(q.rows)) {
    isCorrect = true;
    q.rows.forEach(row => {
      const selected = document.querySelector(`input[name="matrix_row_${row.id}"]:checked`);
      const rowContainer = selected ? selected.closest("tr") : null;
      const expectedVal = q.answer ? q.answer[row.id] : null;

      if (selected && parseInt(selected.value, 10) === expectedVal) {
        if (rowContainer) rowContainer.style.backgroundColor = "#d4edda";
      } else {
        if (rowContainer) rowContainer.style.backgroundColor = "#f8d7da";
        isCorrect = false;
      }
    });
  }
  else if (q.type === "hotspot" && q.answer && typeof q.answer === "object") {
    isCorrect = true;
    const selects = document.querySelectorAll(".inline-select");

    if (selects.length > 0) {
      selects.forEach(selectEl => {
        const key = selectEl.getAttribute("data-key");
        const containerCell = selectEl.closest("td") || selectEl.closest("tr");
        if (selectEl.value === q.answer[key]) {
          selectEl.style.borderColor = "#28a745";
          selectEl.style.backgroundColor = "#d4edda";
          if (containerCell) containerCell.style.backgroundColor = "#d4edda";
        } else {
          selectEl.style.borderColor = "#dc3545";
          selectEl.style.backgroundColor = "#f8d7da";
          if (containerCell) containerCell.style.backgroundColor = "#f8d7da";
          isCorrect = false;
        }
      });
    } else {
      for (let key in q.answer) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        const rowContainer = selected ? selected.closest("tr") : null;
        const expectedVal = q.answer[key];

        if (selected && selected.value === expectedVal) {
          if (rowContainer) rowContainer.style.backgroundColor = "#d4edda";
        } else {
          if (rowContainer) rowContainer.style.backgroundColor = "#f8d7da";
          isCorrect = false;
        }
      }
    }
  }

  questionResults[q.id] = isCorrect;

  const expBox = document.getElementById("explanation-box");
  if (expBox) {
    expBox.className = `explanation-box ${isCorrect ? 'correct-bg' : 'incorrect-bg'}`;
    expBox.innerHTML = `<strong>Result: ${isCorrect ? 'Correct!' : 'Incorrect'}</strong><br><br>${q.explanation || ''}`;
    expBox.style.display = "block";
  }
}

function finishExam() {
  if (timerInterval) clearInterval(timerInterval);

  if (activeQuestions[currentIndex] && hasUserAnswered() && questionResults[activeQuestions[currentIndex].id] === undefined) {
    handleSubmit();
  }

  const examScreen = document.getElementById("exam-screen");
  const pauseBtn = document.getElementById("pauseBtn");
  const resultsScreen = document.getElementById("results-screen");

  if (examScreen) examScreen.style.display = "none";
  if (pauseBtn) pauseBtn.style.display = "none";
  if (resultsScreen) resultsScreen.style.display = "block";

  const totalQuestions = activeQuestions.length;
  let correctCount = 0;

  activeQuestions.forEach(q => {
    if (questionResults[q.id] === true) {
      correctCount++;
    }
  });

  const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const percentageEl = document.getElementById("score-percentage");
  const detailsEl = document.getElementById("score-details");

  if (percentageEl) percentageEl.textContent = `${percentage}%`;
  if (detailsEl) detailsEl.textContent = `You answered ${correctCount} out of ${totalQuestions} questions correctly.`;

  // Compute time taken
  let timeTakenStr = "Untimed";
  if (initialTimerSeconds > 0) {
    const elapsedSeconds = initialTimerSeconds - timerSeconds;
    const minsTaken = Math.floor(elapsedSeconds / 60);
    const secsTaken = elapsedSeconds % 60;
    timeTakenStr = `${minsTaken}m ${secsTaken}s`;
  }

  // Send result log to Google Sheets automatically
  sendExamLogToGoogleSheets(`${percentage}%`, timeTakenStr);
}

function sendExamLogToGoogleSheets(scorePercentage, timeTakenStr) {
  const logStatusEl = document.getElementById("log-status");
  const nameVal = document.getElementById("participantName").value.trim() || "Anonymous";
  const emailVal = document.getElementById("participantEmail").value.trim() || "N/A";

  const payload = {
    name: nameVal,
    email: emailVal,
    score: scorePercentage,
    timeTaken: timeTakenStr
  };

  if (!GOOGLE_SHEET_WEB_APP_URL || GOOGLE_SHEET_WEB_APP_URL.includes("YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE")) {
    if (logStatusEl) logStatusEl.textContent = "Warning: Google Sheet Web App URL is not configured.";
    return;
  }

  fetch(GOOGLE_SHEET_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(() => {
    if (logStatusEl) logStatusEl.textContent = "✓ Score successfully logged to Google Sheets!";
  })
  .catch(error => {
    console.error("Error logging exam results:", error);
    if (logStatusEl) logStatusEl.textContent = "⚠️ Could not save score to Google Sheets.";
  });
}

function restartExam() {
  const resultsScreen = document.getElementById("results-screen");
  const setupScreen = document.getElementById("setup-screen");

  if (resultsScreen) resultsScreen.style.display = "none";
  if (setupScreen) setupScreen.style.display = "block";
  localStorage.removeItem("sc300_current_index");
}
