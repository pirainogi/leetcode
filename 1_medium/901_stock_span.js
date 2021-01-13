function calculateSpan(arr){
  let output = [1]
  for(let curr = 1; curr < arr.length; curr++){
    output[curr] = 1
    let prev = curr - 1
    while (prev >= 0 && arr[curr] >= arr[prev]){
      output[curr] += 1
      prev--
    }
  }
  return output
}
