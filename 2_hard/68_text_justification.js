// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.
// Return the formatted lines as:
// [
//   "This    is   an",
//   "example of text",
//   "justification. "
// ]

// Note: Each word is guaranteed not to exceed L in length.
// if there is only one word in the line , it should be left justified.
// if it is the last line, it should be left justified too.
// if the spaces cannot be evenly distributed between words, left words[Not just one words] shoule contains more space than the right ones. i.e. the extras space should be event distributed from the left.

const fullJustify = (words, maxWidth) => {
  let lines = createLines(words, maxWidth);
  lines = justifyLines(lines, maxWidth);
  return lines;
};

const createLines = (words, maxWidth) => {
  const lines = [];
  let p = 0;

  while(p < words.length) {
    const line = [];

    while(p < words.length) {
      let peek = words[p];
      let peeklen = [...line, peek].join(' ').length;

      if(peeklen <= maxWidth) {
        line.push(peek);
        p++;
      } else {
        break;
      }
    }
  lines.push(line);
  }
  return lines;
};

const justifyLines = (lines, maxWidth) => {
  const justified = [];

  const push = (line, space) => {
    let text = line.join(space);
    let extra = ' '.repeat(maxWidth-text.length);
    justified.push(text + extra);
  };

  for(let l = 0; l < lines.length -1; l++) {
    const line = lines[l];
    let spaces = (maxWidth - line.join('').length);

    for(let i = 0; i < spaces; i++) {
      const index = i%((line.length-1) || 1);
      line[index] += ' ';
    }
    push(line, '');
  };
  push(lines[lines.length-1],  ' ');
  return justified;
}

// Big O: O(n^2)
