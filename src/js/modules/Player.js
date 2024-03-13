export class Player {
    
    constructor(name) {
        // Define properties
        this.name = name;
        this.score = 0;
        this.choice = null;
    }

    chooseAction(action) {
        this.choice = action;
    }

}
