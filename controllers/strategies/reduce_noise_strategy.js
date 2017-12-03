

/** Class representing a reduce noise strategy approach. */
class ReduceNoiseStrategy extends NormalStrategy {
  
  /**
  * Actor constructor.
  * @constructs ReduceNoiseStrategy
  * @param {AlienStore} alienStore
  * @param {InputImage} inputImage
  * @param {number} factor
  */
  constructor(alienStore, inputImage){
    
    this.super(alienStore, inputImage);
    
    /** @member {number} ReduceNoiseStrategy#factor */
    this.factor = factor;
  }
  
  /**override
  * Method to execute the SpaceInvader Detection
  * 
  */   
  execute() {
      this.alienStore.toString();
      this.inputImage.toString();
      console.log(factor);
      console.log('ReduceNoiseStrategy');
  }  

};
  
module.exports = ReduceNoiseStrategy;