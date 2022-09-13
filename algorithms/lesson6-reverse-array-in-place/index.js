function reverseArrayInPlace(array) {
  /*
   * Solution Performance:
   *
   * Time -> O (n) / Linear
   * Space -> O (1) / Constant
   */
  for (let i = 0; i < array.length / 2; i++) {
    const oppositeIndex = array.length - i - 1;
    const oppositeValue = array[ oppositeIndex ];
    array[ oppositeIndex ] = array[i];
    array[i] = oppositeValue;
  }

  return array;
}

const tests = [
  {
    testName: 'Even elements',
    expectedOutput: [ 4, 3, 2, 1 ],
    array: [ 1, 2, 3, 4 ],
  },

  {
    testName: 'Odd elements',
    expectedOutput: [ 3, 2, 1 ],
    array: [ 1, 2, 3 ],
  },
];

tests.forEach(test => {
  console.log(`Starting test "${ test.testName }" ...`);
  const output = reverseArrayInPlace(test.array);
  console.log('Output:', output);

  if ( JSON.stringify(output) === JSON.stringify(test.expectedOutput) ) console.log('Passed');
  else console.error(`Failed, expecting: ${ test.expectedOutput }`);

  console.log('\n ---- \n')
});
