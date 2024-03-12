import { Game } from "./modules/Game.js";

// create a best of three game
const game = new Game(3);

// Game starts at Round 1
document.getElementById("current-round").innerText = 1;

// Get player-selected-hand-text element
const playerSelectedhandMsg = document.getElementById("player-selected-hand-text");

// Get player hand image element
const playerHandImg = document.getElementById("player-hand-img");

// Test player choice
function testPlayerAction(event) {
	console.log("Action Clicked")
	const playerChoice = event.target.alt;

	// check the player click
	if (playerChoice && ["Rock", "Paper", "Scissors"].includes(playerChoice)) {
		console.log("Player choose:", playerChoice);
		playerSelectedhandMsg.innerText = playerChoice;

		// Update player hand
        const imagePath = `images/ply_${playerChoice.toLowerCase()}.svg`;
        playerHandImg.setAttribute("src", imagePath);

		game.playRound(playerChoice.toLowerCase());
		game.updateScores();
	}
} 

// Event listener
const playerOptionsControls = document.getElementById("player-options");
playerOptionsControls.addEventListener("click", testPlayerAction);