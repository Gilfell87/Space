const expect = require('chai').expect;
const InputImage = require('./../models/input_image');


describe('InputImage creation with a file', () => {

  let inputImage;
  let file;
  let matrix;

  before(() => {
    inputImage = new InputImage();

    file = 
      "----o--oo----o--ooo--ooo----\n"+
      "--o-o-----oooooooo-oooooo---\n"+
      "--o--------oo-ooo-oo-oo-oo--\n"+
      "-------o--oooooo--o-oo-o--o-\n"+
      "------o---o-ooo-ooo----o----\n"+
      "-o--o-----o-o---o-ooooo-o---\n"+
      "o-------------ooooo-o--o--o-\n"+
      "--o-------------------------";
      

    matrix =  [
      ['-', '-', '-', '-', 'o', '-', '-', 'o', 'o', '-', '-', '-', '-', 'o', '-', '-', 'o', 'o', 'o', '-', '-', 'o', 'o', 'o', '-', '-', '-', '-'],
      ['-', '-', 'o', '-', 'o', '-', '-', '-', '-', '-', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', '-', 'o', 'o', 'o', 'o', 'o', 'o', '-', '-', '-'],
      ['-', '-', 'o', '-', '-', '-', '-', '-', '-', '-', '-', 'o', 'o', '-', 'o', 'o', 'o', '-', 'o', 'o', '-', 'o', 'o', '-', 'o', 'o', '-', '-'],
      ['-', '-', '-', '-', '-', '-', '-', 'o', '-', '-', 'o', 'o', 'o', 'o', 'o', 'o', '-', '-', 'o', '-', 'o', 'o', '-', 'o', '-', '-', 'o', '-'],
      ['-', '-', '-', '-', '-', '-', 'o', '-', '-', '-', 'o', '-', 'o', 'o', 'o', '-', 'o', 'o', 'o', '-', '-', '-', '-', 'o', '-', '-', '-', '-'],
      ['-', 'o', '-', '-', 'o', '-', '-', '-', '-', '-', 'o', '-', 'o', '-', '-', '-', 'o', '-', 'o', 'o', 'o', 'o', 'o', '-', 'o', '-', '-', '-'],
      ['o', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'o', 'o', 'o', 'o', 'o', '-', 'o', '-', '-', 'o', '-', '-', 'o', '-'],
      ['-', '-', 'o', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    ]
  });

  it('transformFile(file) should return a valid InputImage', function() {

    inputImage.transformFile(file);
      
    expect(inputImage.height).to.equal(8);
    expect(inputImage.width).to.equal(28);
    expect(inputImage.matrix+'').to.equal(matrix+'');
  });
});