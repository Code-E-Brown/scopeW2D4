/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!
***********************************************************************/

const arrowRestSum = (...nums) => {
  let sum = nums.reduce((accum, el) => {
    return accum + el
  })
  return sum
}




console.log( arrowRestSum(3, 5, 6) ); // => 14
console.log( arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9) ); // => 45
console.log( arrowRestSum(0) ); // => 0

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
