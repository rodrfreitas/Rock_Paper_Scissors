import { Player } from "./Player.js";
import { ComputerPlayer } from "./ComputerPlayer.js";

export class Game {

    constructor(rounds) {
        this.player = new Player("Player 1");
        this.computerPlayer = new ComputerPlayer();
        this.rounds = rounds;
        this.currentRound = 1;
    }

    playRound(playerChoice) {
        this.player.chooseAction(playerChoice);
        this.computerPlayer.chooseAction();
        this.currentRound++;

        // Store player and computer choices
        const playerAction = this.player.choice;
        const computerAction = this.computerPlayer.choice;
        // Get the round result msg element
        const roundResultMsg = document.getElementById("round-result-msg");

        // Compare and check who is the winner

        if(playerAction === computerAction) {
            //They chose the same action. so it's a tie
            console.log("It's a tie");
            roundResultMsg.innerText = "It's a tie";
        } else if(
            (playerAction === "rock" && computerAction === "scissors") ||
            (playerAction === "paper" && computerAction === "rock") ||
            (playerAction === "scissors" && computerAction === "paper")
        ) {
            // Player wins the round
            console.log("Player wins the round!");
            roundResultMsg.innerText = "Player wins the round!";
            this.player.score++;
        } else {
            // Computer wins the round
            console.log("Computer wins the round!");
            roundResultMsg.innerText = "Computer wins the round!";
            this.computerPlayer.score++;
        }
    }

    updateScores() {
        // Update front-end
        document.getElementById("current-player-score").innerText = this.player.score;
        document.getElementById("current-cpu-score").innerText = this.computerPlayer.score;
        document.getElementById("current-round").innerText = this.currentRound;

        // Get the round result msg element
        const gameResultMsg = document.getElementById("game-result-msg");

        // Restart Button element
        const restartButton = document.getElementById("restart-button");

        // Check for the winner after each round
        if (this.player.score === 2) {
            console.log("Player wins the best of three game!");
            gameResultMsg.innerText = "Player wins the best of three game!";
            this.showRestartButton(restartButton);
         } else if (this.computerPlayer.score === 2) {
            console.log("Computer wins the best of three game!");
            gameResultMsg.innerText = "Computer wins the best of three game!";
            this.showRestartButton(restartButton);
        } 
        // else if (this.currentRound > this.rounds) {
        // console.log("It's a tie in the best of three game!");
        // // Add logic for handling a tie if needed
        // }
    }

    showRestartButton(button) {
        button.style.display = "block";
        button.addEventListener("click", this.restartGame);
    }
    
    hideRestartButton(button) {
        button.style.display = "none";
        button.removeEventListener("click", this.restartGame);
    }

    restartGame() {
        location.reload(); // Reload the page
    }
}