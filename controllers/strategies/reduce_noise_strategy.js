const Strategy = require('./strategy');
const InputImage = require('../../models/input_image');

const FACTOR_MATRIX = {
  1: {
    matrixSize: 3,
    tunningDensity: 1
  },
  2: {
    matrixSize: 5,
    tunningDensity: 3
  },
  3: {
    matrixSize: 7,
    tunningDensity: 5
  }
};



/** Class representing a reduce noise strategy approach. */
class ReduceNoiseStrategy extends Strategy {

  /**
   * Actor constructor.
   * @constructs ReduceNoiseStrategy
   * @param {AlienStore} alienStore
   * @param {InputImage} inputImage
   * @param {number} dotDensity
   * @param {number} factor
   */
  constructor(alienStore, inputImage, dotDensity, factor) {

    super(alienStore, inputImage, dotDensity);

    /** @member {number} ReduceNoiseStrategy#factor */
    this.factor = factor;

  }

  /**override
   * Method to execute the SpaceInvader Detection
   * Reduce matrix to factor F 
   */
  execute() {
    /** @type {InputMatrix} */
    let reducedMatrix = this.reduceMatrix(this.inputImage, this.factor);

    return this.findAliens(reducedMatrix);
  }

  /**Reshape matrix to reduce noise in edges
   * @private
   * @param {InputImage} image
   * @param {number} factor
   * @return {InputImage}
   */
  augmentedReduceMatrix(image, factor) {

    let inputImage = new InputImage();

    let factorInc = factor * 2;
    let auxHeight = image.height + factorInc;
    let auxWidth = image.width + factorInc;
    let matrix = [];

    for (var i = 0; i < auxHeight; i++) {
      matrix[i] = [];
      for (var j = 0; j < auxWidth; j++) {
        matrix[i][j] = '-';
      }
    }

    for (var i = 0; i < image.height; i++) {
      for (var j = 0; j < image.width; j++) {

        matrix[i + factor][j + factor] = image.matrix[i][j];
      }
    }

    inputImage.plainCreate(matrix, auxHeight, auxWidth);

    return inputImage;
  }


  /**
   * @private
   * @param {InputImage} matrixToReduce
   * @param {number} factor
   * @return {InputImage}
   */
  reduceMatrix(matrixToReduce, factor) {

    let augmentedMatrix = this.augmentedReduceMatrix(matrixToReduce, factor);

    for (var i = factor; i < augmentedMatrix.height - factor; i++) {
      for (var j = factor; j < augmentedMatrix.width - factor; j++) {
        if (augmentedMatrix.matrix[i][j] === 'o') {

          let dotCount = 0;
          for (var r = 1; r <= factor; r++) {
            for (var w = factor; w >= 1; w--) {

              if (augmentedMatrix.matrix[i - r][j - w] === 'o') {
                dotCount++
              };
              if (augmentedMatrix.matrix[i - r][j + w] === 'o') {
                dotCount++
              };
              if (augmentedMatrix.matrix[i + r][j + w] === 'o') {
                dotCount++
              };
              if (augmentedMatrix.matrix[i + r][j - w] === 'o') {
                dotCount++
              };
            }
          }
          if (FACTOR_MATRIX[factor].tunningDensity >= dotCount) {
            augmentedMatrix.matrix[i][j] = '-';
          }
        }
      }
    }

    for (var i = 0; i < matrixToReduce.height; i++) {
      for (var j = 0; j < matrixToReduce.width; j++) {
        matrixToReduce.matrix[i][j] = augmentedMatrix.matrix[i + factor][j + factor];
      }
    }
    return matrixToReduce;
  }

};

module.exports = ReduceNoiseStrategy;