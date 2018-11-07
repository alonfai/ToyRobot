import move from './move';
import report from './report';
import place from './place';
import { Toy, Board } from '../model';
import { ERRORS, DIRECTIONS } from '../constants';

describe('move', () => {
  let board;
  let toy;
  const rows = 5;
  const cols = 5;
  beforeEach(() => {
    board = new Board(rows, cols);
    toy = new Toy();
  });

  it('missing input', () => {
    expect(() => move()).to.throw(ERRORS.INVALID_INPUT);
    expect(() => move(null)).to.throw(ERRORS.INVALID_INPUT);
  });

  it('no place command was initiated => ignore the move command', () => {
    const isSuccess = move(toy, board);
    expect(isSuccess).to.equal(false);
  });

  context('original facing NORTH', () => {
    it('valid move', () => {
      place(toy, 0, 0, DIRECTIONS.NORTH);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.NORTH}`);
      move(toy, board);
      expect(report(toy)).to.equal(`0, 1, ${DIRECTIONS.NORTH}`);
    });

    it('invalid move is ignored', () => {
      // CHECK TOP RIGHT CORNER ILLEGAL MOVE IS IGNORED
      place(toy, rows - 1, cols - 1, DIRECTIONS.NORTH);
      expect(report(toy)).to.equal(`${rows - 1}, ${cols - 1}, ${DIRECTIONS.NORTH}`);
      move(toy, board);
      expect(report(toy)).to.equal(`${rows - 1}, ${cols - 1}, ${DIRECTIONS.NORTH}`);
    });
  });

  context('original facing SOUTH', () => {
    it('valid move', () => {
      place(toy, 0, 1, DIRECTIONS.SOUTH);
      expect(report(toy)).to.equal(`0, 1, ${DIRECTIONS.SOUTH}`);
      move(toy, board);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.SOUTH}`);
    });

    it('invalid move is ignored', () => {
      // CHECK BOTTOM LEFT CORNER ILLEGAL MOVE IS IGNORED
      place(toy, 0, 0, DIRECTIONS.SOUTH);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.SOUTH}`);
      move(toy, board);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.SOUTH}`);
    });
  });

  context('original facing WEST', () => {
    it('valid move', () => {
      place(toy, 1, 1, DIRECTIONS.WEST);
      expect(report(toy)).to.equal(`1, 1, ${DIRECTIONS.WEST}`);
      move(toy, board);
      expect(report(toy)).to.equal(`0, 1, ${DIRECTIONS.WEST}`);
    });

    it('invalid move is ignored', () => {
      // CHECK BOTTOM LEFT CORNER ILLEGAL MOVE IS IGNORED
      place(toy, 0, 0, DIRECTIONS.WEST);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.WEST}`);
      move(toy, board);
      expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.WEST}`);
    });
  });

  context('original facing EAST', () => {
    it('valid move', () => {
      place(toy, 1, 1, DIRECTIONS.EAST);
      expect(report(toy)).to.equal(`1, 1, ${DIRECTIONS.EAST}`);
      move(toy, board);
      expect(report(toy)).to.equal(`2, 1, ${DIRECTIONS.EAST}`);
    });

    it('invalid move is ignored', () => {
      place(toy, rows - 1, 0, DIRECTIONS.EAST);
      expect(report(toy)).to.equal(`${rows - 1}, 0, ${DIRECTIONS.EAST}`);
      move(toy, board);
      expect(report(toy)).to.equal(`${rows - 1}, 0, ${DIRECTIONS.EAST}`);
    });
  });
});
