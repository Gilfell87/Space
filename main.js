/**
* Main class to execute the alien Detection
* You can run the application with node eg.: 
*  >node main -f <PATH> -t <decimal> -r <number>
* 
* -f or --file <PATH> directory to input file
* -t or --threshold <number> threshold from 0..1 to tuning the algorithm
* -r or --factor <number> Integer from 1..3 to tuning the reduce algorithm to clean some noise  
*
*/

const Promise = require('es6-promise').Promise;
const minimist = require('minimist');

const Action = require('./controllers/actions');
const ReduceNoiseStrategy = require('./controllers/strategies/reduce_noise_strategy');
const Strategy = require('./controllers/strategies/strategy');



const options = {
    string: ['file', '_'],
    number: ['threshold', 'factor'],
    alias: {
        f: 'file',
        t: 'threshold',
        r: 'factor'
    },
    default: {
        file: './files/input.txt',
        t: 0.7,
        r: 0
    }
}

const args = minimist(process.argv.slice(2), options);


if(args.factor > 0 && args.factor <= 3){
  Promise.all([Action.loadAliens(), Action.loadInputImage(args.file)]).then( 
    (data) => {      
      
      let strategy = new ReduceNoiseStrategy(data[0], data[1], args.threshold, args.factor);
      let result = strategy.execute();
      strategy.showResults(result);
    }
  ).catch(reason => { 
      console.log(reason)
  });
}else{
  Promise.all([Action.loadAliens(), Action.loadInputImage(args.file)]).then( 
    (data) => {
      
      let strategy = new Strategy(data[0], data[1], args.threshold);    
      let result = strategy.execute();
      strategy.showResults(result);
    }
  ).catch(reason => { 
      console.log(reason);
  });  
}


