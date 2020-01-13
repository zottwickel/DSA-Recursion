function toBinary(num) {
  let output = ''
  function recur(num) {
    if (num === 0) {
      return output
    }
    output = (num % 2) + output
    return recur(Math.floor(num/2))
  }
  return recur(num)
}

console.log(toBinary(25))