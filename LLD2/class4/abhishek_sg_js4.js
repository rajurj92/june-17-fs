// Q1 - Temperature convertor

function convertTemp(temperature, unit) {
  if (unit === "C") {
    const convertedTemp = (9 / 5) * temperature + 32;
    return `Converted Temperature is ${convertedTemp} °F`;
  } else if (unit === "F") {
    const convertedTemp = (5 / 9) * (temperature - 32);
    return `Converted Temperature is ${convertedTemp} °C`;
  }
  return "Invalid params. Please check the inputs!";
}

// Q2 Reverse words
function reverseWords(str) {
  return str
    .split(" ")
    .map((el) => {
      const tempArr = el.split("");
      let res = "";

      for (let i = tempArr.length - 1; i >= 0; i--) {
        res += tempArr[i];
      }
      return res;
    })
    .join(" ");
}

// Q3 categorize students
function categorizeStudents(students) {
  const res = {
    toppers: [],
    cool: [],
    superCool: [],
  };

  for ({ name, score } of students) {
    switch (score) {
      case score < 50:
        res.superCool.push(name);
        break;
      case score < 80:
        res.cool.push(name);
        break;
      default:
        res.toppers.push(name);
    }
  }
  return res;
}

// Encoder
function createEncoder(shift) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return function (str) {
    let res = "";

    for (character of str.split("")) {
      const idx = alphabets.indexOf(character);
      if (idx !== -1) {
        res += str[(idx + shift) % 26];
      } else {
        res += character;
      }
    }

    return res;
  };
}

// Rate limit
function limitCalls(func, limit) {
  let count = 0;

  return function (name) {
    if (count < limit) {
      count++;
      return func(name);
    }

    return "Call limit exceeded";
  };
}
