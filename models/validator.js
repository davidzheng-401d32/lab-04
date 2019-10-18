'use strict';

class Validator {
  /**
   * Is this a string?
   * @param input
   * @returns {string}
   */
  isString(input){
    return typeof input === 'string';
  }

  /**
   * Is this a number?
   * @param input
   * @returns {string}
   */
  isNumber(input){
    return typeof input === 'number';
  }

  /**
   * Is this a boolean?
   * @param input
   * @returns {string}
   */
  isBoolean(input){
    return typeof input === 'boolean';
  }
}

module.exports = Validator;
