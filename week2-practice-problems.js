// Here are some practice JS coding problems just for fun!
// Shout out to the hero Wes Bos(@wesbos) for coming up with these questions as part of his JavaScript30 course!
// Don't worry too much about checking out that course until you're a little farther in the program 😉

//Wherever it says Array.prototype.methodName, that just means we call that methodName on an array, like so: [1,2,3].methodName().
// We'll cover what a "prototype" actually is later in the course.
// Don't be afraid to check out the MDN docs if you're curious about what a method does!

// Round ONE!

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Array.prototype.filter()
// 1. Filter the list of inventors(above) for those who were born in the 1500's

// const inventors = [
//   { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
//   { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
// { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
//   { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
// { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
//   { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
//   { first: "Max", last: "Planck", year: 1858, passed: 1947 },
//   { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
//   { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
//   { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
//   { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
//   { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
// ];
//
// input: no arguments, but using the inventors array of objects
// outpput: an array with only inventors born in the 1500's
// strat
// will iterate over inventors array
// use filter to only "select" the 1500's babies

// const fifteenInventors = function () {
//   let newArray = inventors.filter((inventor, index) => {
//     // this
//     console.log("inventor birth", inventor.year);
//     if (inventor.year < 1600 && inventor.year > 1499) {
//       // console.log("inventor?", inventor);
//       return true;
//     }

//     return false;
//   });
//   console.log(newArray);
// };
// fifteenInventors();

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together(sum of all their ages)?

// 5. Sort the inventors by total years lived

// input: inventors array of objects
// output: array of inventor objects
// strat
// iterate over array
// use sort function to "sort"
// looking for whoever has lived the longest to shortest
//  i'll need to do some quick math to calculate years alive
// return result array

// function totalYrsLived() {
//   inventors.sort((inventor1, inventor2) => {
//     // console.log("inventor1", inventor1.year);
//     // console.log("inventor1", inventor1.passed);
//     // console.log("inventor2", inventor2.year);
//     // console.log("inventor2", inventor2.passed);
//     let inventor1Age = inventor1.passed - inventor1.year;
//     let inventor2Age = inventor2.passed - inventor2.year;
//     console.log("inventor1Age", inventor1Age);
//     console.log("inventor2Age", inventor2Age);
//     console.log("difference", inventor2Age - inventor1Age);
//     if (inventor1Age > inventor2Age) {
//       return -1;
//     } else {
//       return 1;
//     }
//     // return; // difference in years lived
//   });
//   return inventors;
// }

// console.log(totalYrsLived());

// 6. sort Exercise
// Sort the `people` alphabetically by last name

// 7. Reduce Exercise
// Sum up the instances of each of these words in this data array(how many of each?), then
// Return an object with each word(key) pointing to the number of times it occurs in the array(value).
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];
//
//

//
//

//
//

// Round TWO!
// const people = [
//   { name: "Wes", year: 1988 },
//   { name: "Kait", year: 1986 },
//   { name: "Irv", year: 1970 },
//   { name: "Lux", year: 2015 },
// ];

// const comments = [
//   { text: "Love this!", id: 523423 },
//   { text: "Super good", id: 823423 },
//   { text: "You are the best", id: 2039842 },
//   { text: "Ramen is my fav food ever", id: 123523 },
//   { text: "Nice Nice Nice!", id: 542328 },
// ];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423 // *hint* there might be a couple different array methods that can help us with this one
