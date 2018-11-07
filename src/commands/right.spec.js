import right from './right';
import place from './place';
import report from './report';
import { Toy } from '../model';
import { ERRORS, DIRECTIONS } from '../constants';

describe('right', () => {
  it('missing toy input', () => {
    expect(() => right()).to.throw(ERRORS.INVALID_INPUT);
  });
  it('toy not placed on board => ignore command', () => {
    const toy = new Toy();
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = right(toy);
    expect(res).to.equal(false);
  });

  it('facing NORTH => results to EAST', () => {
    const toy = new Toy();
    place(toy, 0, 0, DIRECTIONS.NORTH);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = right(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.EAST}`);
    expect(res).to.equal(true);
  });

  it('facing EAST => results to SOUTH', () => {
    const toy = new Toy();
    place(toy,0, 0, DIRECTIONS.EAST);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = right(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.SOUTH}`);
    expect(res).to.equal(true);
  });

  it('facing SOUTH => results to WEST', () => {
    const toy = new Toy();
    place(toy, 0, 0, DIRECTIONS.SOUTH);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = right(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.WEST}`);
    expect(res).to.equal(true);
  });

  it('facing WEST => results to NORTH', () => {
    const toy = new Toy();
    place(toy, 0, 0, DIRECTIONS.WEST);
    expect(toy.x).to.equal(0);
    expect(toy.y).to.equal(0);
    const res = right(toy);
    expect(report(toy)).to.equal(`0, 0, ${DIRECTIONS.NORTH}`);
    expect(res).to.equal(true);
  });
});
