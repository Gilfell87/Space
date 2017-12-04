const AlienStore = require('../../models/alien_store');
const InputImage = require('../../models/input_image');
const Result = require('../../models/result');



/** Class representing a strategy. */
class Strategy {

  /**
   * Strategy constructor.
   * @constructs Strategy
   * @param {AlienStore} alienStore
   * @param {InputImage} inputImage
   * @param {number} dotDensity
   */
  constructor(alienStore, inputImage, dotDensity) {

    /** @member {AlienStore} Strategy#alienStore */
    this.alienStore = alienStore;

    /** @member {InputImage} Strategy#inputImage */
    this.inputImage = inputImage;

    /** @member {number} Strategy#dotDensity */
    this.dotDensity = dotDensity;
  }

  /** 
   * Method to execute the SpaceInvader Detection
   * @method execute
   */
  execute() {
    return this.findAliens(this.inputImage);
  }

  /**Main algorithm to find Aliens within the image input
   *
   * @param {InputMatrix} input
   * @return {Array.<Result>}
   */
  findAliens(input) {

    /** @type {Array.<Result>} */
    let aliensFound = [];

    this.alienStore.getAliensLst().forEach((alien) => {


      /** @type {InputImage} */
      let augmentedMatrix = this.augmentMatrix(input, alien);

      /** @type {Array.<InputImage>} */

      let subMatrixLst = this.getSubMatrices(augmentedMatrix, alien);

      /** @type {Result} */
      let result = this.foundAliens(subMatrixLst, alien);

      aliensFound.push(result);
    });


    return aliensFound;
    
  }

  /** Reshape Input Image to find aliens in the edge cases;
   * @method showResults
   * @param {Array.<Result>} foundLst
   */
  showResults(foundLst) {
    foundLst.forEach((result) => {
      console.log(result.toString());
    });    
  }


  /** Reshape Input Image to find aliens in the edge cases;
   * @private
   * @param {InputImage} image
   * @param {Alien} alien
   * @return {InputImage}
   */
  augmentMatrix(image, alien) {

    let inputImage = new InputImage();

    let auxHeight = image.height + alien.height * 2;
    let auxWidth = image.width + alien.width * 2;
    let matrix = [];

    for (var i = 0; i < auxHeight; i++) {

      matrix[i] = [];
      for (var j = 0; j < auxWidth; j++) {

        matrix[i][j] = '-';
      }
    }

    for (var i = 0; i < image.height; i++) {
      for (var j = 0; j < image.width; j++) {

        matrix[i + alien.height][j + alien.height] = image.matrix[i][j];
      }
    }

    inputImage.plainCreate(matrix, auxHeight, auxWidth);

    return inputImage;
  }

  /**Method to find possibles alien sub-Matrices;
   * @private
   * @param {InputImage} image
   * @param {Alien} alien
   * @return {Array.<InputImage>}
   */
  getSubMatrices(image, alien) {

    let subMatrixLst = [];

    for (var i = 0; i < image.height; i++) {
      for (var j = 0; j < image.width; j++) {

        let subMatrix = [];
        let dotCount = 0;

        for (var r = 0; r < alien.height; r++) {
          subMatrix[r] = [];
          for (var w = 0; w < alien.width; w++) {
            // count normal subMatrix  
            if (!(i + r >= image.height || j + w >= image.width)) {

              if (image.matrix[i + r][j + w] === 'o') {

                dotCount++
              }
              subMatrix[r][w] = image.matrix[i + r][j + w];
            };
          }
        }

        if (dotCount >= alien.density * this.dotDensity) {

          let subMatrixInput = new InputImage();

          subMatrixInput.plainCreate(subMatrix, alien.height, alien.width);
          subMatrixLst.push(subMatrixInput);
        }
      }
    }

    return subMatrixLst;
  }


  /**Method to find aliens in a list of sub-Matrices;
   * @private
   * @param {Array.<InputImage>} subMatrixLst
   * @param {Alien} alien
   * @return {Result}
   */
  foundAliens(subMatrixLst, alien) {
    /** @type {Result}*/
    let result = new Result(alien.name, []);

    subMatrixLst.forEach((subMatrix) => {

      let countColision = 0;

      for (var i = 0; i < subMatrix.height; i++) {
        for (var j = 0; j < subMatrix.width; j++) {

          if (alien.matrix[i][j] === 'o' && alien.matrix[i][j] === subMatrix.matrix[i][j]) {
            countColision++;
          }
        }
      }

      if (countColision >= alien.density * this.dotDensity) {
        result.add(subMatrix);
      };
    });


    return result;
  }

};

module.exports = Strategy;