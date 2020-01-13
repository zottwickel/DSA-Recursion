function anagrams(word) {
  let array = word.split('')
  const solutions = new Set()
  function generate(n, arr) {
    if (n === 1) {
      return solutions.add(arr.join(''))
    }
    for (let i = 0; i < n; i++) {
      generate(n - 1, arr)

      if (n % 2 === 0) {
        swap(arr, i, n - 1)
      } else {
        swap(arr, 0, n - 1)
      }
    }
  }

  function swap(arr, iA, iB) {
    let tmp = arr[iA]
    arr[iA] = arr[iB]
    arr[iB] = tmp
  }

  generate(array.length, array) 
  return solutions.forEach(el => console.log(el))
}

anagrams('eatery')