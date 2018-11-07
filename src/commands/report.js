import { ERRORS } from '../constants';

/**
 * report - announce the X,Y and facing value of the toy robot
 * @param {Object} toy the toy model object
 * @return {[type]} [description]
 */
function report(toy) {
  if (!toy) {
    throw new Error(ERRORS.INVALID_INPUT);
  }
  return toy.report();
}

export default report;
