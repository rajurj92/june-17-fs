function convertTemperature(temp, unit) {
    switch (unit) {
    let converted;
    case "C": {
        converted = (temp * 9 / 5) + 32;
        return `${temp}°C is ${converted}°F`;
        break;
    }
    case "F": {
        converted = ((temp - 32) * 5) / 9;
        return `${temp}°F is ${converted}°C`;
        break;
    }
    default: {
        return 'Invalid unit';
        break;
    }
}
}

// Write a function called reverseWords that takes a sentence (a string) 
// and returns a new string where each word is reversed, but the word order stays the same.

function reverseWords(sentence) {
    return sentence
        .split(' ')
        .map(word => word.split('').reverse().join(''))
        .join(' ');
}

function reverseWordsByForLoop(sentence) {
    const words = sentence.split(" ");
    const reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let reversedWord = "";
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedWords.push(reversedWord);
    }
    return reversedWords.join(" ");
}

function categorizedStudents(students) {
    const result [], cool: [], superCool: [] }
    for (let student of students) {
        const { score, name } = student;
        if (score >= 80) {
            result(name);
        } else if (score < 80 && score >= 50) {
            resultame);
        } else {
            resultush(name);
        }
    }
    return result;
}



// execution
// console.log(convertTemperature(20, 'C'));
// console.log(convertTemperature(20, 'F'));

// console.log(reverseWords('Hello Welcome to live class.'))

// console.log(reverseWordsByForLoop("Hello World"));

// const students = [
//     { name: "Alice", score: 92 },
//     { name: "Bob", score: 65 },
//     { name: "Charlie", score: 45 },
//     { name: "Diana", score: 88 },
//     { name: "Eve", score: 30 },
//     { name: "Frank", score: 72 }
// ];
// console.log(categorizedStudents(students));