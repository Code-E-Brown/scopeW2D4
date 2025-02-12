/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.
***********************************************************************/

let smoothieMachine = function (...ingred) {

  //let smoothOrder = "I'm having a smoothie with "

  return function (...moreIngred) {
    //smoothOrder = smoothOrder + ingred
    // console.log(ingred)
    // console.log(moreIngred)
    // console.log(ingred.concat(moreIngred))
    // console.log(ingred)
    // console.log(ingred.join(" and "))
    //ingred = (ingred.concat(moreIngred))
    betterArr = [...ingred, ...moreIngred]
    return "I'm having a smoothie with " + betterArr.join(" and ")
  }

}

//smoothieMachine()("milk")


let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
