// Reverse the digits of an integer

// Edge cases: what if an integer ends in 0? What if the reverse integer overflows (return 0)?

// Input: 123
// Output: 321

// Input: 120
// Output: 21

const reverse = (num) => {
  const str = Math.abs(num).toString()
  const rev = str.split("").reverse().join("")
  if (+rev < Math.pow(-2, 31) || +rev > Math.pow(2, 31) - 1) {
    return 0
  }
  return (num < 0 ? - 1 : 1) * +rev
}

const reverse = (num) => {
  let rev = 0
  let absNum = Math.abs(num)
  while(absNum > 0){
    rev = (rev * 10) + (absNum % 10)
    absNum = Math.floor(absNum / 10)
  }
  if (rev > Math.pow(2, 31) - 1) {
    return 0
  }
  return (num < 0 ? -1 : 1) * rev
}
