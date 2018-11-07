import isValidCommand from './isValidCommand';
import { Toy } from '../model';
import { COMMANDS, ERRORS } from '../constants';

describe('isValidCommand', () => {
  let toy;
  beforeEach(() => {
    toy = new Toy();
  });

  it('missing input', () => {
    expect(() => isValidCommand()).to.throw(ERRORS.INVALID_INPUT);
    expect(() => isValidCommand({})).to.throw(ERRORS.INVALID_INPUT);
  });

  it('nullable input', () => {
    expect(() => isValidCommand(null)).to.throw(ERRORS.INVALID_INPUT);
    expect(() => isValidCommand(null)).to.throw(ERRORS.INVALID_INPUT);
  });

  it('invalid command string', () => {
    expect(isValidCommand(toy, 'sddssd')).to.equal(false);
  });

  it('invalid due to toy not placed on board', () => {
    expect(isValidCommand(toy, COMMANDS.PLACE)).to.equal(false);
  });

  it('valid command (MOVE/LEFT/RIGHT/REPORT)', () => {
    toy.markPlaced();
    expect(isValidCommand(toy, COMMANDS.PLACE)).to.equal(true);
  });
});
