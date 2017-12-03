
const Promise = require('es6-promise').Promise;

const Action = require('./controllers/actions');
const NormalStrategy = require('./controllers/strategies/normal_strategy');

const file = './files/input.txt';


Promise.all([Action.loadAliens(), Action.loadInputImage(file)]).then( 
  (alienStore, inputImage) => {
    
    console.log('aqui');
    let strategy = new NormalStrategy(alienStore, inputImage);
    
    strategy.execute();
  }
);



