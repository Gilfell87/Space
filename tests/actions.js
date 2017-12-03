
const expect = require('chai').expect;
const Actions = require('./../controllers/actions');

describe('Actions', () =>  {
  it('loadAliens() should return [] if no valid aliens exist', function() {
      expect(Actions.loadAliens()).to.equal([]);
  });
});

describe('Actions', () => {
  it('loadAliens() should return undefined if no input file exist', function() {
      expect(Actions.loadInputImage()).to.equal([]);
  });
});

describe('Actions', () =>  {
  it('reduceNoise() should return [] if no valid aliens exist', function() {
      expect(Actions.reduceNoise()).to.equal(undefined);
  });
});

describe('Actions', () =>  {
  it('execute() should return [] if no valid aliens exist', function() {
      expect(Actions.execute()).to.equal(0);
  });
});

