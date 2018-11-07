import report from './report';
import { ERRORS } from '../constants';
import { Toy } from '../model';

describe('report', () => {
  it('missing toy input', () => {
    expect(() => report()).to.throw(ERRORS.INVALID_INPUT);
  });

  it('toy report method called', () => {
    const spy = sandbox.spy();
    const toy = new Toy();
    toy.report = spy;
    report(toy);
    expect(spy.callCount).to.equal(1);
  });
});
