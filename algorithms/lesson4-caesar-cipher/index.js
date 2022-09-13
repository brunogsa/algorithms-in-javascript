/**
 * How it works:
 *
 * You must 'shift' the letter by 'num'.
 * For instace: caesarCipher('zoo', 2) -> 'bqq'
 *
 * Keep in mind that:
 * - May have upper / lower case letters
 * - May have punctuation
 * - Don't shift whitespaces and punctuation
 *
 * @param {string} str
 * @param {number} num positive / negative integers
 *
 * @return {string}
 */
function caesarCipher(str, num) {
  /*
   * Solution Performance:
   *
   * Time -> O (n) / Linear
   * Space -> O (n) / Linear
   */
  if (num === 0) return str;

  return str
    .split('')
    .map( char => getShiftedChar(char, num) )
    .join('')
  ;
}

const isUpperCase = char => /^[A-Z]$/.test(char);

const getShiftedChar = (charToShift, numToShift) => {
  const charsThatCanBeShifted = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const lowerCasedChar = charToShift.toLowerCase();
  if ( !charsThatCanBeShifted.includes(lowerCasedChar) ) return charToShift;

  const charIndex = charsThatCanBeShifted.findIndex(char => char === lowerCasedChar);
  const isUpper = isUpperCase(charToShift);

  let newIndex = ( charIndex + numToShift ) % charsThatCanBeShifted.length;
  if (newIndex < 0) newIndex = charsThatCanBeShifted.length + newIndex;

  const newChar = charsThatCanBeShifted[ newIndex ];
  return isUpper ? newChar.toUpperCase() : newChar;
};

const tests = [
  {
    testName: 'Single Word - Lower case only',
    expectedOutput: 'bcd',
    str: `abc`,
    num: 1,
  },

  {
    testName: 'Single Word - Both Lower and Upper case',
    expectedOutput: 'BcD',
    str: `AbC`,
    num: 1,
  },

  {
    testName: 'Single Word - Punctuation is kept',
    expectedOutput: 'BcD?',
    str: `AbC?`,
    num: 1,
  },

  {
    testName: '2 Words - Whitespaces are kept',
    expectedOutput: 'BcD Efg',
    str: `AbC Def`,
    num: 1,
  },

  {
    testName: 'Single Word - Shift entire alphabet (positive)',
    expectedOutput: 'abc',
    str: `abc`,
    num: 26,
  },

  {
    testName: 'Single Word - Shift entire alphabet (negative)',
    expectedOutput: 'abc',
    str: `abc`,
    num: -26,
  },

  {
    testName: 'Single Word - No shift when num is 0',
    expectedOutput: 'abc',
    str: `abc`,
    num: 0,
  },

  {
    testName: 'Single Word - Num is a big positive integer',
    expectedOutput: 'bcd',
    str: `abc`,
    num: 53,
  },

  {
    testName: 'Single Word - Num is a big positive integer',
    expectedOutput: 'bcd',
    str: `abc`,
    num: 53,
  },

  {
    testName: 'Single Word - Negative shift',
    expectedOutput: 'abc',
    str: `bcd`,
    num: -1,
  },

  {
    testName: 'Single Word - Negative shift (overflow)',
    expectedOutput: 'zab',
    str: `abc`,
    num: -1,
  },

  {
    testName: 'Single Word - Positive shift (overflow)',
    expectedOutput: 'bca',
    str: `abz`,
    num: 1,
  },

  {
    testName: 'Single Word - Num is a big negative integer',
    expectedOutput: 'zab',
    str: `abc`,
    num: -53,
  },
];

tests.forEach(test => {
  console.log(`Starting test "${ test.testName }" ...`);
  const output = caesarCipher(test.str, test.num);
  console.log('Output:', output);

  if (output === test.expectedOutput) console.log('Passed');
  else console.error(`Failed, expecting: ${ test.expectedOutput }`);

  console.log('\n ---- \n')
});
