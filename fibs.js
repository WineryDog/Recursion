function fibs(fibLength) {
  const fibStart = [0, 1];

  if (fibLength <= 0) {
    return 'Please insert a number greater than 0';
  }
  if (fibLength === 1) {
    return [0];
  }

  if (fibLength >= 2) {
    for (let i = fibLength; i > 2; i--) {
      const newEntry =
        fibStart[fibStart.length - 1] + fibStart[fibStart.length - 2];
      fibStart.push(newEntry);
    }
    return fibStart;
  }
}

console.log(fibs(1)); // returns [0]
console.log(fibs(2)); // returns [0, 1]
console.log(fibs(8)); // returns [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibs(0)); // returns 'Please insert a number greater than 0'
