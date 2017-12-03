

const fs = require("fs");
const AlienStore = require('../../models/alien_store');
const InputFile = require('../../models/input_image');

const Promise = require('es6-promise').Promise;



/** Class representing a normal strategy. */
class NormalStrategy {
  
  /**
  * NormalStrategy constructor.
  * @constructs NormalStrategy
  * @param {AlienStore} alienStore
  * @param {InputImage} inputImage
  */
  constructor(alienStore, inputImage){
    
    console.log('construct strategy');
    /** @member {AlienStore} NormalStrategy#alienStore */
    this.alienStore = alienStore;
    
    /** @member {InputImage} NormalStrategy#inputImage */
    this.inputImage = inputImage;
  }
  
  /** 
  * Method to execute the SpaceInvader Detection
  * 
  */   
  execute() {
      this.alienStore.toString();
      this.inputImage.toString();
      console.log('NormalStrategy');
  }  

};
  
module.exports = NormalStrategy;
