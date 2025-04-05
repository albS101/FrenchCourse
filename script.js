let currentTheme = 'random';
let currentIndex = 0;
let currentExample = null;

function getCurrentList() {
  if (currentTheme === 'random') {
    return Object.values(themes).flat();
  }
  return themes[currentTheme] || [];
}

function showExample(example) {
  currentExample = example;
  const quizMode = document.getElementById("toggleQuiz").checked;
  const showTranslation = document.getElementById("toggleTranslation").checked;

  document.getElementById("sentence").textContent = example.sentence;
  document.getElementById("explanation").textContent = quizMode ? "" : example.explanation;
  document.getElementById("translation").textContent = (!quizMode && showTranslation) ? example.translation : "";
  document.getElementById("reveal").style.display = quizMode ? "block" : "none";
}

function revealTranslation() {
  if (currentExample) {
    document.getElementById("translation").textContent = currentExample.translation;
  }
}

function showNext() {
  const list = getCurrentList();
  if (list.length === 0) return;
  currentIndex = (currentIndex + 1) % list.length;
  showExample(list[currentIndex]);
}

function showRandom() {
  const all = Object.values(themes).flat();
  const example = all[Math.floor(Math.random() * all.length)];
  showExample(example);
}

function selectTheme(theme) {
  currentTheme = theme;
  currentIndex = 0;
  showNext();
}

function playAudio() {
  const text = document.getElementById("sentence").textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'fr-FR';
  speechSynthesis.speak(utterance);
}

document.addEventListener("DOMContentLoaded", () => {
  showRandom();
});