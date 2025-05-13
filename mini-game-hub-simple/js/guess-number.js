const number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const feedback = document.getElementById("feedback");
  attempts++;
  if (guess === number) {
    feedback.textContent = `Correct! You guessed it in ${attempts} tries.`;
  } else if (guess < number) {
    feedback.textContent = "Too low!";
  } else {
    feedback.textContent = "Too high!";
  }
}
