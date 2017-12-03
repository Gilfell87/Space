const math = require('mathjs');

class InputImage {
  
  /**
  * Actor constructor.
  * @constructs InputImage
  */
  constructor () {
        /** @member {number} InputImage#width */
        this.width = 0;
        
        /** @member {number} InputImage#height */
        this.height = 0;
        
        /** @member {Matrix} InputImage#matrix */
        this.matrix = undefined;
  }
  
  /** 
  * Transform file into a matrix;
  * @param {string} file
  */
  transformFile(file) {
    
    let imageLines = file.split('\n');
    let matrix = [];
    imageLines.forEach( (line, i) => {
      matrix.push(line.replace(/(\r\n|\n|\r)/gm,"").trim().split(''));                 
    });
    
    this.height = imageLines.length;
    this.width = matrix[0].length;
    this.matrix = math.matrix(matrix);    
    
  };
  
  toString(){
  
    //TODO improve ptrint for matrix; 
    let info = 
      'W: '       + this.width  + ', ' +
      'H: '       + this.height + '\n' +
      'Matrix:\n' + this.matrix + '\n';
      
    return info;    
  }
    
}

module.exports = InputImage;