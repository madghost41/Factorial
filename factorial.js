function factorial(num) {
  let product = 1
  for(i = num, num < i, i--) { 
    return product = product * i
  }
  return product
}

module.exports = factorial;
