const prime = (n) => {
  if (typeof n !== 'number') {
    throw new TypeError('invalid input. Enter a positive number between 1 and 100');
  } else if (n < 1) {
    throw new TypeError('invalid input. Enter a positive number between 1 and 100');
  }
  else if (n > 100) {
    throw new TypeError('invalid input. Enter a positive number between 1 and 100');
  }
  else if (n === 1) {
    return false;
  }
  else if (n === 2 || n === 3 || n === 5 || n === 7 ) {
    return true;
  }
  else if (n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
    return false;
  }
  return true;
};


module.exports = prime;
