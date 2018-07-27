/**
 * Problem:
 *
 * Ransom notes are phrases made out of words cut from a magazine
 * @see: https://i.pinimg.com/736x/c2/4f/e0/c24fe008818531a4a1ed916862d303a2--easter-jokes-easter-hunt.jpg
 *
 * This problem takes in account you only use complete words (it's not possible to 'build' words by ctting letters).
 *
 * The function above must return a boolean indicating if it's possible to write the desired note from the
 * available magazine text we have available.
 *
 * Assume:
 * - Every word is in lower case
 * - There's no punctuation
 *
 * @param {string} noteToWrite
 * @param {string} magazineTextAvailable
 * @return {boolean} canNoteBeFormed
 */
function harmlessRansomNote(noteToWrite, magazineTextAvailable) {
  /*
   * Solution Performance:
   *
   * Time -> O (n + m) / Linear
   * Space -> O (n + m) / Linear
   */
  const neededWords = buildMapOfWords(noteToWrite);
  const availableWords = buildMapOfWords(magazineTextAvailable);

  for ( let word of Object.keys(neededWords) ) {
    const requiredNumber = neededWords[ word ];
    const availableNumber = availableWords[ word ] || 0;

    if (availableNumber < requiredNumber) return false;
  }

  return true;
}

function buildMapOfWords(text) {
  return text.split(' ').reduce((acc, word) => {
    if (acc[ word ] === undefined) acc[ word ] = 1;
    else acc[ word ]++;

    return acc;
  }, {});
}

const tests = [
  {
    testName: 'Simple Case #1 - Note can be written',
    expectedOutput: true,
    noteToWrite: `i love you`,
    magazineTextAvailable: `i really love te way we can keep learning here in my company dont you agree`,
  },

  {
    testName: 'Simple Case #2 - Note cannot be written',
    expectedOutput: false,
    noteToWrite: `impossible mission test case`,
    magazineTextAvailable: `have you ever asked yourself what is our purpose what is the mission`,
  },
];

tests.forEach(test => {
  console.log(`Starting test "${ test.testName }" ...`);
  const output = harmlessRansomNote(test.noteToWrite, test.magazineTextAvailable);
  console.log('Output:', output);

  if (output === test.expectedOutput) console.log('Passed');
  else console.error('Failed');

  console.log('\n ---- \n')
});
