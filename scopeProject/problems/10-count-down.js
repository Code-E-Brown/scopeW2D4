/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will 
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it 
returns a string of "Happy New Year!". Look closely at how this function is 
invoked below:
***********************************************************************/

let countDownTimer = n => {
  if (n === 0) {
    return "Happy New Year!";
  }
  const count = () => {
    n--;
    if (n <= 0) {
      return "Happy New Year!"
    } else {
      return count
    }
  }
  return count
}




// console.log(countDownTimer(0)); // prints "Happy New Year!"

// let oneDay = countDownTimer(1); 
// console.log(oneDay()); // prints "Happy New Year!"

let twoDays = countDownTimer(2); 
console.log(twoDays()); // returns a function
console.log(twoDays()); // prints "Happy New Year!"

// let threeDays = countDownTimer(3); 
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // returns a function
// console.log(threeDays()); // prints "Happy New Year!"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
