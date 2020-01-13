function powerCalculator(base, power) {
  if (power === 0) {
    return 1
  } else if (power < 0) {
    return 'power should be >= 0'
  }
  return base * powerCalculator(base, (power - 1))
}

console.log(powerCalculator(10, 2))