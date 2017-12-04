/** Class to represent the aliens found per alien */ 
class Result {
  
  /**
  * Result constructor.
  * @constructs Result
  */
  constructor (name, foundLst) {
    
        /** @member {string} Result#name */
        this.name = "";
        
        /** @member {number} Result#foundLst */
        this.foundLst = [];
  }
  
  add(matrix){    
    this.foundLst.push(matrix);
  }  
  
  toString(){    
    
    let matrixInfo = '';
    
    this.foundLst.forEach( (found) => {      
      matrixInfo += found.toString() + '\n';
    });
    
    let info = 
      'Name: '    + this.name    + ', ' +
      'Matrix: \n'+ matrixInfo;
      
    return info;      
  }
}

module.exports = Result;