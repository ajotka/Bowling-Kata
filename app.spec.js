const Game = require('./app.js');

describe('Test Bowling Game', () => {

  let game;

  function rollMany(n, pins) {
    while (n--) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }

  beforeEach(() => {
    game = new Game();
  });

  test('should handle dead ball / gutter', () => {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  test('should handle all ones', () => {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  test('should handle one spare only', () => {
    rollSpare();
    rollMany(18, 0);
    expect(game.score()).toEqual(10);
  });

  test('should handle one spare + 3 bonus rolls', () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toEqual(16);
  });

  test('should handle one strike only', () => {
    rollStrike();
    rollMany(19, 0);
    expect(game.score()).toEqual(10);
  });

  test('should handle one strike with bonus', () => {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toEqual(24);
  });

  test('should handle a perfect game (12 strikes)', () => {
    rollMany(12, 10);
    expect(game.score()).toEqual(300);
  });

  test('should handle 10 pairs of 9 and miss', () => {
    for (let i = 0; i < 10; i++) {
      game.roll(9);
      game.roll(0);
    }
    expect(game.score()).toEqual(90);
  });

  test('should handle 10 pairs of 5 and spare, with a final 5', () => {
    for (let i = 0; i < 10; i++) {
      game.roll(5);
      game.roll(5);
    }
    game.roll(5);
    expect(game.score()).toEqual(150);
  });

  test('should handle incorrect number of frames (count for first 20)', () => {
    rollMany(50, 1);
    expect(game.score()).toEqual(20);
  });

});
