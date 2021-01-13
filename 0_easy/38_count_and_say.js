// The count-and-say sequence is the sequence of integers beginning as follows: 1, 11, 21, 1211, 111221, ...

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n, generate the nth sequence.
// Note: The sequence of integers will be represented as a string.

const countAndSay = (num) => {
  let seed = '1';

  while (num > 1) {
    let count = 0;
    let next = '';

    for (let i = 0; i <= seed.length; i++) {
      if (i === seed.length || (i > 0 && seed[i] !== seed[i - 1])) {
        next += count + seed[i - 1]; // Say
        count = 0;
      }
      count++; // Count
    }
    seed = next;
    num--;
  }
  return seed;
};
