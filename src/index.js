/*eslint-disable*/
import { Toy, Board } from './model';
import { DIRECTIONS } from './constants';
import * as commands from './commands';

const stdin = process.openStdin();

const toy = new Toy();
const board = new Board(5, 5);

stdin.addListener('data', (data) => {
  const command = data.toString().trim();
  if (command.startsWith('PLACE')) {
    const placeParams = command.substr(command.indexOf(' ')).split(',');
    if (placeParams.length !== 3) {
      console.warn('Invalid place command arguments');
      return;
    }
    const x = parseInt(placeParams[0]);
    const y = parseInt(placeParams[1]);
    const direction = placeParams[2];
    commands.place(toy, x, y, direction);
  } else if (command === 'MOVE') {
    commands.move(toy, board);
  } else if (command === 'LEFT') {
    commands.left(toy);
  } else if (command === 'RIGHT') {
    commands.right(toy);
  } else if (command === 'REPORT') {
    const location = commands.report(toy);
    console.log(`location is ==> ${location}`);
  }
});
