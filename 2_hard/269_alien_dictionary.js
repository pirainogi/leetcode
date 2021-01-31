// There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.
//
// Given the following words in dictionary,
// [
//   "wrt",
//   "wrf",
//   "er",
//   "ett",
//   "rftt"
// ]
// The correct order is: "wertf".

const alienOrder = (words) => {
  if(words.length === 0) return ""
  if(words.length === 1) return words[0]

  const adjList = new Array(26).fill(null)
  const charSet = getLetters(words)

  charSet.forEach(char => {
    adjList[getIndex(char)] = []
  })

  for(let i = 0; i < words.length; i++){
    let index = findEdge(words[i], words[i + 1])
    if(index !== -1){
      const word1char = getIndex(words[i][index])
      const word2char = getIndex(words[i + 1][index])
      if(adjList[word1char].indexOf(word2char) !== -1){
        adjList[word1char].push(word2char)
      }
    }
  }

  if(isCyclical(adjList)) return ""

  return getTopologicalOrder(adjList).reverse().map(index => indexToAlpha(index)).join("")
}

const getLetters = (words) => {
  const set = new Set()
  for(let word of words){
    for(let char of word){
      set.add(char)
    }
  }
  return set
}

const getIndex = (char) => {
  return char.charCodeAt(0) - "a".charCodeAt(0)
}

const findEdge = (word1, word2) => {
  let index = 0
  while(word1[index] === word2[index] && index < word1.length && index < word2.length){
    index++
  }
  if(index === word1.length || index === word2.length) return -1

  return index
}

const isCyclical = (adjList) => {
  for(let i = 0; i < adjList.length; i++){
    const stack = new Set()
    if(isCyclicalFrom(i, adjList, stack)) return true
  }
  return false
}

const isCyclicalFrom = (vertex, adjList, stack) => {
  if(adjList[vertex] === null) return false
  else if(stack.has(vertex)) return true

  stack.add(vertex)

  for(let i = 0; i < adjList.length; i++){
    if(isCyclicalFrom(adjList[vertex][i], adjList, stack)) return true
  }

  stack.delete(vertex)
  return false
}

const getTopologicalOrder = (adjList) => {
  const visited = new Array(26).fill(false)
  const stack = []

  for(let i = 0; i < adjList.length; i++){
    if(adjList[i] && !visited[i]){
      dfs(i, adjList, visited, stack)
    }
  }
  return stack
}

const dfs = (root, adjList, visited, stack) => {
  if(visited[root]) return

  visited[root] = true

  for(let i = 0; i < adjList[root].length; i++){
    dfs(adjList[root][i], adjList, visited, stack)
  }

  stack.push(root)
}

const indexToAlpha = (index) => {
  index += "a".charCodeAt(0)
  return String.fromCharCode(index)
}
