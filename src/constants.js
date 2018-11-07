/**
 * DIRECTIONS - different directions the toy robot can face at
 */
export const DIRECTIONS = {
  NORTH: 'NORTH',
  SOUTH: 'SOUTH',
  EAST: 'EAST',
  WEST: 'WEST',
};

/**
 * COMMANDS - the different commands a user can put on screen
 */
export const COMMANDS = {
  PLACE: 'PLACE',
  MOVE: 'MOVE',
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  REPORT: 'REPORT',
};

/**
 * ERRORS - User input errors
 */
export const ERRORS = {
  INVALID_INPUT: 'Invalid Input',
  INVALID_BOARD_DIMENSIONS: 'Invalid board dimensions',
  INVALID_COORDINATE: 'Invalid x/y coordiante input',
  INVALID_FACING: 'Invalid facing direction',
};
