import Board from './board';
import { ERRORS } from '../constants';

describe('Board', () => {
  it('missing Rows and Cols input', () => {
    expect(() => new Board()).to.throw(ERRORS.INVALID_INPUT)
  });

  it('uneven Rows and Cols', () => {
    expect(() => new Board(2, 3)).to.throw(ERRORS.INVALID_BOARD_DIMENSIONS);
  })

  it('valid input', () => {
    expect(() => new Board(5, 5)).to.not.throw;
  })

  context('invalid Rows point', () => {
    it('missing value', () => {
      expect(() => new Board(undefined, 5)).to.throw(ERRORS.INVALID_INPUT);
    });

    it('negative value', () => {
      expect(() => new Board(-1, 5)).to.throw(ERRORS.INVALID_INPUT);
    });
  });

  context('invalid Cols point', () => {
    it('missing value', () => {
      expect(() => new Board(5, undefined)).to.throw(ERRORS.INVALID_INPUT);
    });

    it('negative value', () => {
      expect(() => new Board(5, -1)).to.throw(ERRORS.INVALID_INPUT);
    });
  });
})
