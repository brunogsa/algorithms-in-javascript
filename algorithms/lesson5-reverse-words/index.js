/**
 * - Every word must be reversed, but the whole string mustn't
 * - Do not use array.reverse()
 * - There won't be consecutive whitespaces (more than 1 in a row)
 * - There won't be punctuation
 *
 * @param {string} str
 * @return {string}
 */
function reverseWords(str) {
  /*
   * Solution Performance:
   *
   * Time -> O (n) / Linear
   * Space -> O (n) / Linear
   */
  return str
    .split(' ')
    .map(reverseWord)
    .join(' ')
  ;
}

function reverseWord(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) reversedWord += word[i];
  return reversedWord;
}

const tests = [
  {
    testName: 'Single Word',
    expectedOutput: 'cBA',
    str: `ABc`,
  },

  {
    testName: '4 Words',
    expectedOutput: 'I ma a repoleved',
    str: `I am a developer`,
  },
];

tests.forEach(test => {
  console.log(`Starting test "${ test.testName }" ...`);
  const output = reverseWords(test.str);
  console.log('Output:', output);

  if (output === test.expectedOutput) console.log('Passed');
  else console.error(`Failed, expecting: ${ test.expectedOutput }`);

  console.log('\n ---- \n')
});
