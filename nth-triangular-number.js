function nthTriangularNumber(num) {
  if (num === 1) {
    return 1
  }
  return num + nthTriangularNumber(num - 1)
}

console.log(nthTriangularNumber(7))

// big o = O(1)