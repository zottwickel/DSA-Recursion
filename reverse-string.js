function reverseString(str) {
  let arr = []
  let i = str.length
  function recur() {
    if (i < 0) {
      return
    }
    arr.push(str[i])
    i--
    recur()
  }
  recur()
  console.log(arr.join(''))
}

reverseString('something')

// big o = O(1)