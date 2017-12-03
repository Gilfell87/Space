const math = require('mathjs');

class Alien {
  
  /**
  * Actor constructor.
  * @constructs AlienStore
  */
  constructor () {
        /** @member {string} Alien#name */
        this.name = "";
        
        /** @member {number} Alien#width */
        this.width = 0;
        
        /** @member {number} Alien#height */
        this.height = 0;
        
        /** @member {Matrix} Alien#matrix */
        this.matrix = undefined;
  }
  
  /** 
  * Transform file into a matrix;
  * @param {string} filename
  * @param {string} file
  */
  transformFile(filename, file) {
    this.name = filename;
    
    let alienLines = file.split('\n');
    let matrix = [];
    alienLines.forEach( (line, i) => {
      matrix.push(line.replace(/(\r\n|\n|\r)/gm,"").trim().split(''));                 
    });
    
    this.height = alienLines.length;
    this.width = matrix[0].length;
    this.matrix = math.matrix(matrix);    
    
  };
  
  toString(){
  
    //TODO improve ptrint for matrix; 
    let info = 
      'Name: '    + this.name   + ', ' +
      'W: '       + this.width  + ', ' +
      'H: '       + this.height + '\n' +
      'Matrix:\n' + this.matrix + '\n';
      
    return info;    
  }
    
}

module.exports = Alien;