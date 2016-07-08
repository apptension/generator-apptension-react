import {expect} from 'chai';

import unpath from '../unpath';

describe('unpath function test', () => {
  it('must be a function', () => {
    expect(typeof unpath).to.equal('function');
  });

  it('throws when first argument is not an object', () => {
    expect(() => unpath({})).to.not.throw(TypeError);
    expect(() => unpath('')).to.throw(TypeError);
    expect(() => unpath(111)).to.throw(TypeError);
    expect(() => unpath(() => {})).to.throw(TypeError);
  });

  it('must return empty object for empty object', () => {
    expect(unpath({})).to.deep.equal({});
  });

  it('must return the same object with one level key indent', () => {
    expect(unpath({a: 'a', b: 2})).to.deep.equal({a: 'a', b: 2});
  });

  it('must return object with properly structure', () => {
    expect(unpath({
      app: {
        welcome: {
          title: 'Welcome Title',
          subComponent: {
            title: 'SubComponent Title',
            subTitle: 'SubComponent subTitle'
          }
        },
        other: {
          some: 'some',
          other: 'other',
          number: 1
        }
      }
    })).to.deep.equal({
      'app.welcome.title': 'Welcome Title',
      'app.welcome.subComponent.title': 'SubComponent Title',
      'app.welcome.subComponent.subTitle': 'SubComponent subTitle',
      'app.other.some': 'some',
      'app.other.other': 'other',
      'app.other.number': 1
    });
  });
});
