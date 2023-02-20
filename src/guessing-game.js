class GuessingGame {
    constructor() {}

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
    this.gues = Math.round((this.max + this.min) /2)
    return this.gues;
    }

    lower() {
    this.max = this.gues
    }

    greater() {
    this.min = this.gues
    }
}

module.exports = GuessingGame;
