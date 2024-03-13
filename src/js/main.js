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
    console.log("Action Clicked");

    const selectedPlayerChoices = event.target.closest(".player-choices");

    // Check for null
    if (selectedPlayerChoices) {
        const playerChoice = selectedPlayerChoices.dataset.action;
        console.log(playerChoice);

        if (game.player.score === 2 || game.computerPlayer.score === 2) {
            console.log("Game over - Please press Restart Game Button");
            return;
        }

        // check the player click
        if (playerChoice && ["rock", "paper", "scissors"].includes(playerChoice)) {
            console.log("Player choose:", playerChoice);
            playerSelectedhandMsg.innerText = playerChoice;

            // Update player hand
            const imagePath = `images/ply_${playerChoice.toLowerCase()}.svg`;
            playerHandImg.setAttribute("src", imagePath);

            // Player hand animatiom
            gsap.set(playerHandImg, { x: -170 });

            gsap.to(playerHandImg, {
                duration: 0.4,
                x: 0,
                opacity: 1,
                ease: "bounce.out",
                onComplete: () => {
                    gsap.to(playerHandImg, { duration: 0.5, x: 0, opacity: 1, ease: "bounce.out" }); // Play animation again
                }
            });

            game.playRound(playerChoice.toLowerCase());
            game.updateScores();
        }
    }
}

// Event listener
const playerOptionsControls = document.getElementById("player-options");
playerOptionsControls.addEventListener("click", testPlayerAction);