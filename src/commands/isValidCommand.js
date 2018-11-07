import { COMMANDS, ERRORS } from '../constants';

/**
 * isValidCommand - does the given command is a valid one to play with the toy (in case if it was placed on the board itself)
 * @param {Object} toy the toy model object
 * @param {String} input command value
 * @returns {Boolean} does the command is allowed or not
 */
function isValidCommand(toy, input) {
  if (!toy || !input) {
    throw new Error(ERRORS.INVALID_INPUT);
  }
  return input && COMMANDS[input] && toy.isToyPlaced ? true : false;
}

export default isValidCommand;
