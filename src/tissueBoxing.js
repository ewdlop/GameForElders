class TissueBoxing {
  constructor() {
    this.score = 0;
  }

  punch() {
    this.score += 1;
    return this.score;
  }

  reset() {
    this.score = 0;
  }
}

module.exports = TissueBoxing;
