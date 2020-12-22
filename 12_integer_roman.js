// Given an integer, convert it to a roman numeral
//
// Input is guaranteed to be between 1 and 3999

const intRoman = (num) => {
  const map = {
    1000: 'M',
    900: 'CM',
    500:  'D',
    400: 'CD',
    100:  'C',
    90: 'XC',
    50:  'L',
    40: 'XL',
    10:  'X',
    9: 'IX',
    5:  'V',
    4: 'IV',
    1:  'I'
  }

  let result = ''
  for (roman in map) {
    const counter = Math.floor(num / map[key])
    if(counter !== 0) {
      result += key.repeat(counter)
    }
    num %= map[key]
    if(num === 0) return result
  }
  return result
}

//Big O: O(n)
