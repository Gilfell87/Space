class Alien {
  
  /**
  * Alien constructor.
  * @constructs Alien
  */
  constructor () {
    
        /** @member {string} Alien#name */
        this.name = "";
        
        /** @member {number} Alien#width */
        this.width = 0;
        
        /** @member {number} Alien#height */
        this.height = 0;
        
        /** @member {Matrix} Alien#matrix */
        this.matrix = [];
        
        /** @member {number} Alien#density */
        this.density = 0;
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
    alienLines.forEach( (line) => {
      matrix.push(line.replace(/(\r\n|\n|\r)/gm,"").trim().split(''));                 
    });
    
    this.height = alienLines.length;
    this.width = matrix[0].length;
    this.matrix = matrix; 
    
    let count = 0;
    this.matrix.forEach( (line) => {
      line.forEach( (chars) => {
        if(chars === 'o'){
          count++;
        }
      });
    });
    
    this.density = count;
    console.log(this.density);
  };
  
  toString(){
  
    let matrixInfo = '';
    
    this.matrix.forEach( (line) => {
      matrixInfo += line.join('') + '\n';
    });
    
    let info = 
      'Name: '    + this.name    + ', ' +
      'W: '       + this.width   + ', ' +
      'H: '       + this.height  + '\n' +
      'D: '       + this.density + '\n' +
      'Matrix:\n' + matrixInfo   + '\n';
      
    return info;    
  }
    
}

module.exports = Alien;