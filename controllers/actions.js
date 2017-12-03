const fs = require("fs");
const AlienStore = require('../models/alien_store');
const Alien = require('../models/alien');
const InputImage = require('../models/input_image');
const dirname = './files/aliens/'; 
const Promise = require('es6-promise').Promise;



/** Class representing a set of static actions. */
class Action {
  
  
  /* Private methods */
  /** Read an alien file
  * @private
  * @param {string} dir
  * @param {string} filename
  * @return {Promise}
  */
  static _readFile(dir, filename){
    return new Promise((resolved, rejected) => {
      fs.readFile(dir + filename, 'utf-8', (err, content) => {
        if (err) {
          //error handling
          rejected(err);
        }
        
        let alien = new Alien();
        alien.transformFile(filename, content);
        resolved(alien);
      });      
    });
  }

  
  /**
  * Method to load images from possible aliens Files and saved them into AlienStore;
  * @method Action#loadAliens
  * @return {Promise}
  */ 
  static loadAliens() {
    
      return new Promise( (resolved, rejected) => {
          let alienPromises = [];
          let store = new AlienStore();
          let self = this;
          
          fs.readdir(dirname, (err, filenames) => {
            if (err) {
              //error handling
              rejected(err);
            }
            filenames.forEach( (filename) => {          
              alienPromises.push(this._readFile(dirname, filename));
            });
            
            Promise.all(alienPromises).then( (alienLst) => {
              
              alienLst.forEach( (alien) => {
                store.add(alien);                
              })
              console.log('load_finished');
              resolved(store);
              
            });
            
        });  
      });  
  }
  
  
  /**
  * Method to load images from input file
  * @param {string} file 
  * @return {Promise};
  */ 
  static loadInputImage(file) {
    return new Promise( (resolved, rejected) => {
        fs.readFile(file, 'utf-8', (err, content) => {
          if (err) {
            //error handling
            console.log('image_finished');
            rejected(err);
          }
          
          let inputFile = new InputImage();
          inputFile.transformFile(content);
          console.log('image_finished');
          resolved(inputFile);
        });      
      });
  }

  /**
  * Function to reduce the noise by a factor
  * 
  * return InputMatrix
  */ 
  static reduceNoise(factor, input) {
    
    return undefined;
  }
    
  
  
  /**
  * Method to execute the SpaceInvader Detection
  * 
  */   
  static execute(matrix, strategy, aliens) {
      console.log("executing");
      
      return 0;
  }  

};
  


// expose Dispatcher
module.exports = Action;
