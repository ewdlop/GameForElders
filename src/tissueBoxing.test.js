const TissueBoxing = require('./tissueBoxing');

describe('TissueBoxing', () => {
  let game;

  beforeEach(() => {
    game = new TissueBoxing();
  });

  test('should initialize with a score of 0', () => {
    expect(game.score).toBe(0);
  });

  test('should increase score by 1 when punch is called', () => {
    game.punch();
    expect(game.score).toBe(1);
  });

  test('should reset score to 0', () => {
    game.punch();
    game.reset();
    expect(game.score).toBe(0);
  });
});
