const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const prime = require('./prime');

describe('prime', function () {
  describe('invalid input', function () {
    it('should throw an error if given a negative number', function () {
      const input = -3;
      const result = function () { prime(input); }
      expect(result).throw(TypeError, 'invalid input. Enter a positive number between 1 and 100');
    });
    it('should throw an error if given a string',function () {
      const input = '33';
      const result = function () { prime(input); }
      expect(result).throw(TypeError, 'invalid input. Enter a positive number between 1 and 100');
    });
    it ('should throw an error if given an array', function () {
      const input = [1, 2];
      const result = function () { prime(input); }
      expect(result).throw(TypeError, 'invalid input. Enter a positive number between 1 and 100');
    });
    it('should throw an error if no input is supplied', () => {
      const result = function () { prime(); }
      expect(result).throw(TypeError, 'invalid input. Enter a positive number between 1 and 100');
    })
    it('should throw an error if input is greater than 100', () => {
      const result = function () { prime(101); }
      expect(result).throw(TypeError, 'invalid input. Enter a positive number between 1 and 100');
    })
  });
  describe('valid input', () => {
    it('should return false when passed an even number other than two', () => {
      const input = 1;
      const result = prime(input);
      expect(result).to.equal(false);
    })
    it('should return false when passed an even number other than two', () => {
      const input = 6;
      const result = prime(input);
      expect(result).to.equal(false);
    })
    it('should return true when passed a prime number', () => {
      const input = 7;
      const result = prime(input);
      expect(result).to.equal(true);
    })
    it('should return true when passed a prime number', () => {
      const input = 29;
      const result = prime(input);
      expect(result).to.equal(true);
    })
  })
});
