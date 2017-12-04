const expect = require('chai').expect;

const InputImage = require('./../models/input_image');
const Alien = require('./../models/alien');
const AlienStore = require('./../models/alien_store');
const ReduceNoiseStrategy = require('./../controllers/strategies/reduce_noise_strategy');
const Strategy = require('./../controllers/strategies/strategy');

describe('InputImage creation with a file', () => {

  let inputImage;
  let file;
  let alien;
  let filename;
  let file_in;
  let strategy_normal;
  let strategy_reduce;
  let threshold;
  let factor;
  let alienStore;

  before(() => {
    threshold = 0.58;
    factor = 1;
    alien = new Alien();
    inputImage = new InputImage();
    alienStore = new AlienStore();
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
      
    file_in = 
      "----o--oo----o--ooo--ooo----\n"+
      "--o-o-----oooooooo-oooooo---\n"+
      "--o--------oo-ooo-oo-oo-oo--\n"+
      "-------o--oooooo--o-oo-o--o-\n"+
      "------o---o-ooo-ooo----o----\n"+
      "-o--o-----o-o---o-ooooo-o---\n"+
      "o-------------ooooo-o--o--o-\n"+
      "--o-------------------------";

      inputImage.transformFile(file_in);
      alien.transformFile(filename, file);
      alienStore.add(alien);
      
      strategy_normal = new Strategy(alienStore, inputImage, threshold);
      strategy_reduce = new ReduceNoiseStrategy(alienStore, inputImage, threshold, factor);
  });

  it('strategy_normal.execute(file) should return a list of Results, validate length', function() {
        
    let result = strategy_normal.execute();
    expect(result[0].foundLst.length).to.equal(17);
  });
  
  it('strategy_reduce.execute(file) should return a list of Results, validate length', function() { 
       
    let result = strategy_reduce.execute();
    expect(result[0].foundLst.length).to.equal(1);
  });
});