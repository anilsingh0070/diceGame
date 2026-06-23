
// Game state
let player1Score = 0;
let player2Score = 0;
const img1 = document.querySelectorAll("img")[0];
const img2 = document.querySelectorAll("img")[1];
const resultMessage = document.getElementById("result-message");
const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// Roll dice function
function rollDice() {
  // Add rolling animation
  img1.classList.add("rolling");
  img2.classList.add("rolling");

  // Generate random numbers
  setTimeout(() => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // Update dice images
    const randomImageSource1 = "images/dice" + randomNumber1 + ".png";
    const randomImageSource2 = "images/dice" + randomNumber2 + ".png";

    img1.setAttribute("src", randomImageSource1);
    img2.setAttribute("src", randomImageSource2);

    // Remove rolling animation
    img1.classList.remove("rolling");
    img2.classList.remove("rolling");

    // Determine winner and update score
    if (randomNumber1 > randomNumber2) {
      player1Score++;
      resultMessage.innerHTML = "🚩 Player 1 Wins!";
      resultMessage.className = "player1-wins";
    } else if (randomNumber2 > randomNumber1) {
      player2Score++;
      resultMessage.innerHTML = "Player 2 Wins! 🚩";
      resultMessage.className = "player2-wins";
    } else {
      resultMessage.innerHTML = "🤝 It's a Draw!";
      resultMessage.className = "draw";
    }

    // Update score display
    score1Display.textContent = player1Score;
    score2Display.textContent = player2Score;
  }, 600);
}

// Reset game
function resetGame() {
  player1Score = 0;
  player2Score = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";
  resultMessage.innerHTML = "🎲 Game Reset! Ready to Roll?";
  resultMessage.className = "";
  img1.setAttribute("src", "images/dice6.png");
  img2.setAttribute("src", "images/dice6.png");
}

// Event listeners
rollBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);

// Keyboard support (Space or Enter to roll)
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    e.preventDefault();
    rollDice();
  }
});

// Initial roll
rollDice();
