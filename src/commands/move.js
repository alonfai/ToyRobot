import { COMMANDS, DIRECTIONS, ERRORS } from '../constants';
import isValidCommand from './isValidCommand'

/**
 * move - run a "MOVE" command on the toy
 * @param {Object} toy the toy model object
 * @param {Object} board the board model object
 * @return {Boolean} whether the command was successful or not
 */
function move(toy, board) {
  if (!toy || !board) {
    throw new Error(ERRORS.INVALID_INPUT);
  }
  // Discard "MOVE" commands until the toy has been "PLACED" on the board
  if (!isValidCommand(toy, COMMANDS.MOVE)) {
    return false;
  }
  const { facing, x, y } = toy;
  const { rows, cols } = board;
  switch (facing) {
    case DIRECTIONS.NORTH:
      if (y + 1 >= rows) {
        return;
      }
      toy.saveY(y + 1); // Move the toy in NORTH direction
      break;
    case DIRECTIONS.SOUTH:
      if (y <= 0) {
        return;
      }
      toy.saveY(y - 1); // Move the toy in SOUTH direction
      break;
    case DIRECTIONS.EAST:
      if (x + 1 >= cols) {
        return;
      }
      toy.saveX(x + 1); // Move the toy in EAST direction
      break;
    case DIRECTIONS.WEST:
      if (x <= 0) {
        return;
      }
      toy.saveX(x - 1); // Move the toy in WEST direction
      break;
  }
  return true;
}

export default move;
