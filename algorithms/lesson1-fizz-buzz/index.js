/*
 * Problem:
 *
 * - Logs every number from 1 to num
 * - If divisible by 3, log 'Fizz' instead
 * - If divisible by 5, log 'Buzz' instead
 * - If divisible by both 3 and 5, log 'FizzBuzz' instead
 */
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    /*
     * Solution Performance:
     *
     * Time -> O (n) / Linear
     * Space -> O (1) / Constant
     */
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;

    let msgToLog = isDivisibleBy3
      ? isDivisibleBy5
        ? 'FizzBuzz' : 'Fizz'
      : isDivisibleBy5
        ? 'Buzz' : i
    ;

    console.log(msgToLog);
  }
}

fizzBuzz(30);
