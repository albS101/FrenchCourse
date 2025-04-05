let currentTheme = 'random';
let currentIndex = 0;
function getCurrentList() {
  if (currentTheme === 'random') {
    let all = Object.values(themes).flat();
    return all;
  }
  return themes[currentTheme] || [];
}
function showExample(example) {
  document.getElementById("sentence").textContent = example.sentence;
  document.getElementById("explanation").textContent = example.explanation;
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
document.addEventListener("DOMContentLoaded", () => {
  showRandom();
});