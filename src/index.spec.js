import { Toy, Board } from './model';
import { DIRECTIONS } from './constants';
import * as commands from './commands';

describe('SCENARIOS', () => {
  it('scenario 1', () => {
    const toy = new Toy();
    const board = new Board(5, 5);

    commands.place(toy, 0, 0, DIRECTIONS.NORTH);
    commands.move(toy, board);

    const report = commands.report(toy);
    expect(report).to.equal(`0, 1, ${DIRECTIONS.NORTH}`);
  });

  it('scenario 2', () => {
    const toy = new Toy();

    commands.place(toy, 0, 0, DIRECTIONS.NORTH);
    commands.left(toy);

    const report = commands.report(toy);
    expect(report).to.equal(`0, 0, ${DIRECTIONS.WEST}`);
  });

  it('scenario 3', () => {
    const toy = new Toy();
    const board = new Board(5, 5);

    commands.place(toy, 1, 2, DIRECTIONS.EAST);
    commands.move(toy, board);
    commands.move(toy, board);
    commands.left(toy);
    commands.move(toy, board);


    const report = commands.report(toy);
    expect(report).to.equal(`3, 3, ${DIRECTIONS.NORTH}`);
  });
});
