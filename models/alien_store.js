
/** Class representing a set of existent aliens. */
class AlienStore {
  /**
  * AlienStore constructor.
  * @constructs AlienStore
  */
  constructor () {
        /** 
        * @member {Array.<Alien>} AlienStore#aliensLst 
        */
        this.aliensLst = [];
  }
  
  /** 
  * Method to add aliens;
  * @method AlienStore#add
  * @param {Alien} alien
  */  
  add(alien){
    this.aliensLst.push(alien);
  }

  /**
  * @method AlienStore#getAliensLst
  * @return {Array}
  */
  getAliensLst(){
    return this.aliensLst;
  }
  
  toString(){
    let info = '';
    
    this.aliensLst.forEach( (alien) => {
      info += alien.toString();
    });
    
    return info;
  }

};

module.exports = AlienStore;