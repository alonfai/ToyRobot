import { ERRORS } from '../constants';

/**
 * place - place the toy on the board
 * @param  {Number} x      the X coordiante
 * @param  {Number} y      the Y coordiante
 * @param  {String} facing the toy facing directions
 * @return {Boolean} whether the placement was successful or not
 */
function place(toy, x, y, facing) {
  if (!toy) {
    throw new Error(ERRORS.INVALID_INPUT)
  }
  toy.saveX(x);
  toy.saveY(y);
  toy.saveFacing(facing);
  toy.markPlaced();
  return true;
}

export default place;
