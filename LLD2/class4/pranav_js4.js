/*
 * Q1.
 * Write a function called convertTemp that takes two arguments: a number (the temperature)
 * and a string (the unit, either "C" or "F"). If the unit is "C", convert the temperature
 * to Fahrenheit. If the unit is "F", convert it to Celsius. Return a string that describes the result.
 */

function convertTemp(temp, unit) {
  switch (unit) {
    case "C":
      var val = (temp * 9) / 5 + 32;
      return temp + "deg C is " + val + "deg F";
      break;
    case "F":
      var val = ((temp - 32) * 5) / 9;
      return temp + "deg F is " + val + "deg C";
      break;
    default:
      return "invalid input";
  }
}
//
// convertTemp(0, "C");

/*
 * Q2.
 * Write a function called reverseWords that takes a sentence (a string)
 * and returns a new string where each word is reversed, but the word
 * order stays the same.
 * "Hello World" -> "olleH dlroW"
 */

function reverseWords(str) {
  if (str === "") return "Invalid input";

  const words = str.split();

  const reversedWord = [];

  for (const word of words) {
    let reverse = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverse += word[i];
    }
    reverseWords.push(reverse);
  }
}
//
// console.log("Hello World");

/*
* Q3.
* You are given an array of student objects. 
* Each student has a name and a score. 
* Write a function called categorizeStudents that takes this array and 
* returns an object with three arrays: 
* toppers (score 80 and above), 
* cool (score 50 to 79), and 
* superCool (score below 50). 
* Each array should contain the student names (not the full objects).

* const students = [
*  { name: "Alice", score: 92 },
*  { name: "Bob", score: 65 },
*  { name: "Charlie", score: 45 },
*  { name: "Diana", score: 88 },
*  { name: "Eve", score: 30 },
*  { name: "Frank", score: 72 }
* ];

* categorizeStudents(students);
* Expected output:
* {
*   toppers: ["Alice", "Diana"],
*   cool: ["Bob", "Frank"],
*   superCool: ["Charlie", "Eve"]
* }
*
*/

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 45 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 30 },
  { name: "Frank", score: 72 },
];

function categorizeStudents(studentList) {
  const result = {
    toppers: [],
    cool: [],
    superCool: [],
  };

  for (const student of studentList) {
    let name = student.name;
    let score = student.score;

    if (score >= 80) {
      result.toppers.push(name);
    } else if (score >= 50) {
      result.cool.push(name);
    } else {
      result.superCool.push(name);
    }
  }

  return result;
}

// console.log(categorizeStudents(students));

/*
* Q4.
* Create a mini library system. You have an array of book objects. Each book has title, author, and isAvailable (boolean). 

* const library = [
*   {title: "War of Art", author: "Steven Pressfield", isAvailable: true}
* ];
* Write three functions:
* findBook(library, title) - searches for a book by title and returns the book object, or null if not found.
* borrowBook(library, title) - sets the book's isAvailable to false if it exists and is available. Returns a message string.
* returnBook(library, title) - sets the book's isAvailable to true if it exists and is currently borrowed. Returns a message string.
*/

/*
* Q5.
* Write a function called createEncoder that takes a number (a shift value). It returns a function 
* that takes a message string and shifts every letter forward in the alphabet by that number. 
* Non-letter characters stay the same. For simplicity, handle only lowercase letters and wrap around (so z shifted by 1 becomes a).

* const encode3 = createEncoder(3);
* console.log(encode3("hello"));     // "khoor"
* console.log(encode3("xyz"));       // "abc"
*
* const encode1 = createEncoder(1);
* console.log(encode1("abc"));       // "bcd"
*
*/

function createEncoder(shift) {
  const alphabets = [abcdefghijklmnopqrstuvwxyz];

  return function (str) {};
}
