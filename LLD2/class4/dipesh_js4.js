function convertTemp(temp, unit) {
  let result;
  if (unit === "C") {
    result = (temp * 9) / 5 + 32;
  } else if (unit === "F") {
    result = (5 / 9) * (temp - 32);
  } else return "unit is invalid";
  return result;
}
console.log(convertTemp(100, "C"));

function reverseWords(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
function reverseWordsInplace(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    str[i] = reverseWords(str[i]);
  }
  return str.join(" ");
}
console.log(reverseWordsInplace("hello world"));

function palindrome(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return "Nope mate it's not a palindrome";
    left++;
    right--;
  }
  return `Yep that's a palindrome, I know when I see one`;
}

const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 65 },
  { name: "Charlie", score: 45 },
  { name: "Diana", score: 88 },
  { name: "Eve", score: 30 },
  { name: "Frank", score: 72 },
];
categorizeStudents(students);
// Expected output:
// {
//   toppers: ["Alice", "Diana"],
//   cool: ["Bob", "Frank"],
//   superCool: ["Charlie", "Eve"]
// }

function categorizeStudents(arr) {
  const result = { toppers: [], cool: [], superCool: [] };

  for (const student of arr) {
    if (student.score >= 80) toppers.push(student.name);
    else if (student.score < 80 && student.score >= 50) cool.push(student.name);
    else if (student.score < 50) superCool.push(student.name);
  }
  return result;
}

function createEncoder(shiftValue) {
  shiftValue = shiftValue % 26;

  return function encodedValue(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
      }
    }
  };
}
