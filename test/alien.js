const expect = require('chai').expect;
const Alien = require('./../models/alien');

const crab = './file/aliens/squid.txt'

describe('Alien creation with a file', () => {

  let alien;
  let filename;
  let file;
  let matrix;

  before(() => {
    alien = new Alien();
    filename = 'squid.txt';
    file =
      "---oo---\n" +
      "--oooo--\n" +
      "-oooooo-\n" +
      "oo-oo-oo\n" +
      "oooooooo\n" +
      "--o--o--\n" +
      "-o-oo-o-\n" +
      "o-o--o-o";

    matrix = [
      ['-', '-', '-', 'o', 'o', '-', '-', '-'],
      ['-', '-', 'o', 'o', 'o', 'o', '-', '-'],
      ['-', 'o', 'o', 'o', 'o', 'o', 'o', '-'],
      ['o', 'o', '-', 'o', 'o', '-', 'o', 'o'],
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
      ['-', '-', 'o', '-', '-', 'o', '-', '-'],
      ['-', 'o', '-', 'o', 'o', '-', 'o', '-'],
      ['o', '-', 'o', '-', '-', 'o', '-', 'o']
    ]

  });

  it('transformFile(filename, file) should return a valid alien', function() {

    alien.transformFile(filename, file);
      
    expect(alien.height).to.equal(8);
    expect(alien.width).to.equal(8);
    expect(alien.matrix+'').to.equal(matrix+'');
    expect(alien.density).to.equal(36);
  });
});