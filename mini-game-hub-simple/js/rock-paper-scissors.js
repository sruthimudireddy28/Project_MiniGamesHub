function play(user) {
  const choices = ["rock", "paper", "scissors"];
  const computer = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (user === computer) {
    result = `Tie! Both chose ${user}`;
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    result = `You win! ${user} beats ${computer}`;
  } else {
    result = `You lose! ${computer} beats ${user}`;
  }

  document.getElementById("result").textContent = result;
}
