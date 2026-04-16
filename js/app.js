const scores = [0, 0];

function getScoreEl(player) {
  return document.getElementById('score' + player);
}

function updateScore(player, delta) {
  const idx = player - 1;
  scores[idx] = Math.max(0, scores[idx] + delta);
  const el = getScoreEl(player);
  el.textContent = scores[idx];
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 160);
}

document.querySelectorAll('.score-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const player = parseInt(btn.dataset.player, 10);
    const delta = btn.classList.contains('score-btn--plus') ? 1 : -1;
    updateScore(player, delta);
  });
});

document.getElementById('resetBtn').addEventListener('click', () => {
  scores[0] = 0;
  scores[1] = 0;
  getScoreEl(1).textContent = '0';
  getScoreEl(2).textContent = '0';
  document.querySelectorAll('.player__name').forEach(input => {
    input.value = '';
  });
});
