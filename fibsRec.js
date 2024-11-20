function fibsRec(fibLength, fibStart = [0, 1]) {
  if (fibLength <= 0) {
    return 'Please insert a number greater than 0';
  }
  if (fibLength === 1) {
    return [0];
  }

  if (fibStart.length >= fibLength) {
    return fibStart;
  }

  return fibsRec(fibLength, [...fibStart, fibStart.at(-1) + fibStart.at(-2)]);
}

console.log(fibsRec(1)); // returns [0]
console.log(fibsRec(2)); // returns [0, 1]
console.log(fibsRec(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(0)); // returns 'Please insert a number greater than 0'
