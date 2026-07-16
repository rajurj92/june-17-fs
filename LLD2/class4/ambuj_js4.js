// function convertTemp(temp, unit){
//     let temp = temp;
//     let converted = 0;
//     if (unit === "C") {
//         converted =  (temp * 9/5) + 32;
//     }
//     else if (unit === "F") {
//         converted = (temp - 32) * 5/9;
//     }
//     else{
//         return `invalid ${unit}`
//     }
//     return `${temp}  C is ${converted}F`
// }

/** 1.split the string and convert to array
 * 2. loop through the array and on each iteration reverse the word using .reverse()
 * 3. replace the array with reversed srings
 * 4. join the array using .join and return the reversed string
 * **/

function reverseWords(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    let reversed = words[i].reverse();
    words[i] = reversed;
  }
  const reversed = words.join(" ");
  return reversed;
}

/** 1. create a function categorizeStudents which takes parameter students
 * 2. store students in const variable
 * 3. create three categorised arrays for toppers, cool and superCool students
 * 4. Loop through students and check for their scores in each iteration using students[i].scores()
 * 5. if score is 80 or above push the student[i].name() to toppers array
 * 6. if score is between 50 and 79 push the student[i].name() to cool array
 * 7. if score is below 50 push the student[i].name() to superCool array
 * 8. return an object with three properties toppers, cool and superCool with their respective arrays
 */

/** 1. create a funtion createEncoder that takes shift as a parameter
 * 2. create a function shiftValue and pass string s as a parameter
 * 3. const result=""
 * loop through the string
 * 4. if charCodeAt(s[i])<97 or charCodeAt(i)>123 result+=s[i]
 * 5. else shiftedValue = charCodeAt(i)+shift
 * 6. result+=String.fromCharCode(shiftedValue)
 * 7. return result
 * 8. return shiftValue inside createEncoder
 *
 *
 */

function createEncoder(shift) {
  function shiftValue(s) {
    const result = "";
    for (const i of s) {
      if (charCodeAt(i) < 97 || charCodeAt(i) > 123) {
        result += s[i];
      } else {
        shiftedValue = (charCodeAt(i) + shift) % 25;
        result += String.fromCharCode(shiftedValue);
      }
    }
    return result;
  }
  return shiftValue;
}

function limitCalls(sayHello, maxCalls) {
  let count = 0;
  function sayHello(name) {
    return `hello ${name}`;
  }
  if (count <= maxCalls) {
    count += 1;
    return sayHello;
  } else {
    return "Call limit reached";
  }
}
