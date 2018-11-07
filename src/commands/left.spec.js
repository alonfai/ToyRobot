import left from './left';
import place from './place';
import { Toy } from '../model';
import report from './report';
import { ERRORS, DIRECTIONS } from '../constants';

describe('left', () => {
  let toy;

  beforeEach(() => {
    toy = new Toy();
  });

  it('missing toy input', () => {
    expect(() => left()).to.throw(ERRORS.INVALID_INPUT);
  });

  it('toy not placed on board => ignore command', () => {
      expect(toy.x).to.equal(0);
      expect(toy.y).to.equal(0);
      const res = left(toy);
      expect(res).to.equal(false);
  });

  it('facing NORTH => results to WEST', () => {
    place(toy, 0, 0, DIRECTIONS.NORTH);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = left(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.WEST}`);
    expect(res).to.equal(true);
  });

  it('facing WEST => results to SOUTH', () => {
    place(toy, 0, 0, DIRECTIONS.WEST);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = left(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.SOUTH}`);
    expect(res).to.equal(true);
  });

  it('facing SOUTH => results to EAST', () => {
    place(toy, 0, 0, DIRECTIONS.SOUTH);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = left(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.EAST}`);
    expect(res).to.equal(true);
  });

  it('facing EAST => results to NORTH', () => {
    place(toy, 0, 0, DIRECTIONS.EAST);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = left(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.NORTH}`);
    expect(res).to.equal(true);
  });
});
