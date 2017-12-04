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
        this.matrix = [];
  }
  
  /** 
  * Transform file into a matrix;
  * @param {string} file
  */
  transformFile(file) {
    
    let imageLines = file.split('\n');
    let matrix = [];
    imageLines.forEach( (line) => {
      matrix.push(line.replace(/(\r\n|\n|\r)/gm,"").trim().split(''));                 
    });

    this.height = imageLines.length;
    this.width  = matrix[0].length;
    this.matrix = matrix;  
    
  };
  
  /** 
  * Transform file into a matrix;
  * @param {Matrix} file
  * @param {number} height
  * @param {number} width
  */
  plainCreate(matrix, height, width) {
    
    this.height = height;
    this.width  = width;
    this.matrix = matrix;  
    
  };
  
  
  toString(){
  
    let matrixInfo = '';
    
    this.matrix.forEach( (line) => {
      matrixInfo += line.join('') + '\n';
    });
    
    let info = 
      'W: '       + this.width  + ', ' +
      'H: '       + this.height + '\n' +
      'Matrix:\n' + matrixInfo + '\n';
      
    return info;    
  }
    
}

module.exports = InputImage;