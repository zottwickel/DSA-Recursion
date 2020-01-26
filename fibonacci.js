function fibonacci(num) {
  if (num === 1) {
    return '1'
  } else if (num === 2) {
    return '1, 1'
  }
  let prev = 1
  let next = 1
  let resp = 0
  function recur(num) {
    if (num === 2) {
      return resp
    }
    resp = prev + next
    prev = next
    next = resp
    return recur(num - 1)
  }
  recur(num)
  return fibonacci(num - 1) + ', ' + resp.toString()
}

console.log(fibonacci(7))

// big o = O(1)