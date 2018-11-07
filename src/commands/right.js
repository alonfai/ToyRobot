import { COMMANDS, DIRECTIONS, ERRORS } from '../constants';
import isValidCommand from './isValidCommand'

/**
 * right - run a "RIGHT" command on the toy
 * @param {Object} toy the toy model object
 * @return {Boolean} whether the command was successful or not
 */
function right(toy) {
  if (!toy) {
    throw new Error(ERRORS.INVALID_INPUT);
  }
  // Discard "RIGHT" commands until the toy has been "PLACED" on the board
  if (!isValidCommand(toy, COMMANDS.RIGHT)) {
    return false;
  }

  const { facing } = toy;
  let newFacing;
  switch (facing) {
    case DIRECTIONS.NORTH:
      newFacing = DIRECTIONS.EAST;
      break;
    case DIRECTIONS.SOUTH:
      newFacing = DIRECTIONS.WEST;
      break;
    case DIRECTIONS.EAST:
      newFacing = DIRECTIONS.SOUTH;
      break;
    case DIRECTIONS.WEST:
      newFacing = DIRECTIONS.NORTH;
      break;
  }
  toy.saveFacing(newFacing); //Store the new facing position of the toy
  return true;
}

export default right;
