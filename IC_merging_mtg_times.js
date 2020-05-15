//Write a function mergeRanges() that takes an array of multiple meeting time ranges
//and returns an array of condensed ranges.

let mergeRanges = (array) => {
    let condensed = [array[0]]
    for(let i = 1; i<array.length; i++){
      if(array[i].startTime <= condensed[condensed.length-1].startTime){
        condensed[condensed.length-1].startTime = array[i].startTime
      } 
      else if(array[i].startTime < condensed[condensed.length-1].endTime){
        condensed[condensed.length-1].endTime = array[i].endTime
      } 
      else {
        condensed.push(array[i])
      } 
    }
    return condensed
  }

const input1 = [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 6},  
    {startTime: 2, endTime: 3},
    {startTime: 5, endTime: 6},
]

/*expected output = 
    [ 
      {startTime: 0, endTime: 1}, 
      {startTime: 2, endTime: 6} 
    ]
*/
  
const input = [
    {startTime: 0, endTime: 1}, 
    {startTime: 3, endTime: 5},
    {startTime: 4, endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9, endTime: 10},
]

/*expected output = 
    [ 
      {startTime:0, endTime:1}, 
      {startTime:3, endTime:8}, 
      {startTime:9, endTime:12}
    ] 
*/