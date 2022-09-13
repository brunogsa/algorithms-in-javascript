/**
 * Problem:
 *
 * Palindrome is a word or phrase that's equally spealed in both backward / forward.
 *
 * Examples:
 * - 'race car' -> 'rac ecar' (Is Palindrome)
 * - 'Madam, I'm Adam' -> 'madA m'I madam' (Is Palindrome)
 * - 'Not Palindrome' -> 'emordnilaP toN' (Not a Palindrome)
 *
 * Assumptions:
 * - Has punctuation
 * - Has whitespaces
 * - Can have upper and lower case characters
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  /*
   * Solution Performance:
   *
   * Time -> O (n) / Linear
   * Space -> O (n) / Linear
   */
  const simplifiedStr = getSimplifedString(str);

  for (let i = 0; i < simplifiedStr.length / 2; i++) {
    const oppositeIndex = simplifiedStr.length - i - 1;
    if ( simplifiedStr[i] !== simplifiedStr[oppositeIndex] ) return false;
  }

  return true;
}

// Everything is in lower case, no punctuation, no whitespaces
function getSimplifedString(str) {
  const allowedChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

  return str
    .toLowerCase()
    .split('')
    .filter( char => allowedChars.includes(char) )
    .join('')
  ;
}

const tests = [
  {
    testName: 'Test #1',
    expectedOutput: true,
    str: `Race Car`,
  },

  {
    testName: 'Test #2',
    expectedOutput: true,
    str: `Madam, I'm Adam`,
  },

  {
    testName: 'Test #3',
    expectedOutput: false,
    str: `NoT A pAlIndRomE`,
  },
];

tests.forEach(test => {
  console.log(`Starting test "${ test.testName }" ...`);
  const output = isPalindrome(test.str);
  console.log('Output:', output);

  if (output === test.expectedOutput) console.log('Passed');
  else console.error('Failed');

  console.log('\n ---- \n')
});
