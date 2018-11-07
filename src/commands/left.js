import { COMMANDS, DIRECTIONS, ERRORS } from '../constants';
import isValidCommand from './isValidCommand'

/**
 * left- run a "LEFT" command on the toy
 * @param {Object} toy the toy model object
 * @return {Boolean} whether the command was successful or not
 */
function left(toy) {
  if (!toy) {
    throw new Error(ERRORS.INVALID_INPUT);
  }
  // Discard "LEFT" commands until the toy has been "PLACED" on the board
  if (!isValidCommand(toy, COMMANDS.LEFT)) {
    return false;
  }

  const { facing } = toy;
  let newFacing;
  switch (facing) {
    case DIRECTIONS.NORTH:
      newFacing = DIRECTIONS.WEST;
      break;
    case DIRECTIONS.SOUTH:
      newFacing = DIRECTIONS.EAST;
      break;
    case DIRECTIONS.EAST:
      newFacing = DIRECTIONS.NORTH;
      break;
    case DIRECTIONS.WEST:
      newFacing = DIRECTIONS.SOUTH;
      break;
  }
  toy.saveFacing(newFacing); //Store the new facing position of the toy
  return true;
}

export default left;
