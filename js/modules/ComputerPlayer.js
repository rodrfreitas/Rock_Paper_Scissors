import { Player } from "./Player.js";

// Get cpu-selected-hand-text element
const cpuSelectedhandMsg = document.getElementById("cpu-selected-hand-text");

// Get computer hand image element
const cpuHandImg = document.getElementById("cpu-hand-img");

export class ComputerPlayer extends Player {
    constructor() {
        super("Computer");
    }
    chooseAction() {
        const gestures = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * gestures.length);
        this.choice = gestures[randomIndex];

        // Update player hand
        const imagePath = `images/cpu_${this.choice}.svg`;
        cpuHandImg.setAttribute("src", imagePath);

        cpuSelectedhandMsg.innerText = this.choice;
        console.log("Computer choose:", this.choice);
    }
}


