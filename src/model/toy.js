import { DIRECTIONS, ERRORS } from '../constants';

class Toy {
  constructor() {
    this.x = this.y = 0;
    this.isPlaced = false;
  }

  /**
   * saveX - saves the coordiate of the X axis of the toy on the board
   * @param  {Number} point the value of the X axis
   */
  saveX = (point) => {
    if (point === undefined || point === null || point < 0) {
      throw new Error(ERRORS.INVALID_COORDINATE);
    }
    this.x = point;
  }

  /**
   * saveY - saves the coordiate of the Y axis of the toy on the board
   * @param  {Number} point the value of the Y axis
   */
  saveY = (point) => {
    if (point === undefined || point === null || point < 0) {
      throw new Error(ERRORS.INVALID_COORDINATE);
    }
    this.y = point;
  }

  /**
   * saveFacing - saves the direction where the toy robot is facing
   * @param  {String} newFacing the direction of where to point the toy towards at
   */
  saveFacing = (newFacing) => {
    if (!newFacing || !DIRECTIONS[newFacing]) {
      throw new Error(ERRORS.INVALID_FACING);
    }
    this.facing = newFacing;
  }

  /**
   * report - announce the X,Y and facing value of the toy robot
   * @return {String} the result
   */
  report = () => {
    return `${this.x}, ${this.y}, ${this.facing}`;
  }

  /**
   * markPlaced - flag the toy as its on the game board placed
   */
  markPlaced = () => {
    this.isPlaced = true;
  }

  /**
   * get isToyPlaced - get true/false whether the toy is placed on the board or not
   * @return {Boolean} does the toy placed on the board or not
   */
  get isToyPlaced() {
    return this.isPlaced;
  }
}

export default Toy;
