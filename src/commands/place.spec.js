import place from './place';
import { Toy } from '../model';
import { DIRECTIONS, ERRORS } from '../constants';

describe('place', () => {

  it('invalid input', () => {
    expect(() => place()).to.throw(ERRORS.INVALID_INPUT);
    expect(() => place(null)).to.throw(ERRORS.INVALID_INPUT);
  });

  it('call all methods required', () => {
    const toy = new Toy();
    const saveXSpy = sandbox.spy();
    const saveYSpy = sandbox.spy();
    const saveFacingSpy = sandbox.spy();
    const markPlacedSpy = sandbox.spy();
    toy.saveX = saveXSpy;
    toy.saveY = saveYSpy;
    toy.saveFacing = saveFacingSpy;
    toy.markPlaced = markPlacedSpy;
    place(toy, 0, 0, DIRECTIONS.EAST);
    expect(saveXSpy.callCount).to.equal(1);
    expect(saveYSpy.callCount).to.equal(1);
    expect(saveFacingSpy.callCount).to.equal(1);
    expect(markPlacedSpy.callCount).to.equal(1);
  });
});
