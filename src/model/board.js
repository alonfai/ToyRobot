import { ERRORS } from '../constants';

/**
 * Square Board game object represented with number Rows and Cols
 */
class Board {
  constructor(rows, cols) {
    if (!rows || rows < 0 || !cols || cols < 0) {
      throw new Error(ERRORS.INVALID_INPUT);
    }
    if (rows !== cols) {
      throw new Error(ERRORS.INVALID_BOARD_DIMENSIONS);
    }
    this.rows = rows;
    this.cols = cols;
  }
}

export default Board;
