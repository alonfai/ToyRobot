import Toy from './toy';
import { ERRORS, DIRECTIONS } from '../constants';

describe('Toy', () => {
  let toy;
  beforeEach(() => {
    toy = new Toy();
  });

  context('saveX()', () => {
    it('missing input', () => {
      expect(() => toy.saveX()).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('nullable input', () => {
      expect(() => toy.saveX(null)).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('negative value', () => {
      expect(() => toy.saveX(-1)).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('valid value', () => {
      toy.saveX(5);
      expect(toy.x).to.equal(5);
    });
  });

  context('saveY()', () => {
    it('missing input', () => {
      expect(() => toy.saveY()).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('nullable input', () => {
      expect(() => toy.saveY(null)).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('negative value', () => {
      expect(() => toy.saveY(-2)).to.throw(ERRORS.INVALID_COORDINATE);
    });

    it('valid value', () => {
      toy.saveY(5);
      expect(toy.y).to.equal(5);
    });
  });

  context('saveFacing()', () => {
    it('missing input', () => {
      expect(() => toy.saveFacing()).to.throw(ERRORS.INVALID_FACING);
    });

    it('nullable input', () => {
      expect(() => toy.saveFacing(null)).to.throw(ERRORS.INVALID_FACING);
    });

    it('invalid direction parameter', () => {
      expect(() => toy.saveFacing('invalid value')).to.throw(ERRORS.INVALID_FACING);
    });

    it('valid value', () => {
      toy.saveFacing(DIRECTIONS.NORTH);
      expect(toy.facing).to.equal(DIRECTIONS.NORTH);
    });
  });

  context('report()', () => {
    it('valid string template', () => {
      toy.saveX(5);
      toy.saveY(1);
      toy.saveFacing(DIRECTIONS.EAST);
      const report = toy.report();
      expect(report).to.equal('5, 1, EAST');
    });
  });
});
