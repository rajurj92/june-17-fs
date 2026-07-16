// function convertTemp(temp,unit){
//     let ans=undefined;
//     if(unit==='C' || unit === 'c'){
//        ans= (temp*9/5)+32;
//        return `${ans} F`;
//     }else if(unit==='F' || unit==='f'){
//         ans=(temp-32) * 5/9;
//         return `${ans} deg C`;
//     }else{
//         return  'invalid unit';
//     }
// }

// console.log(convertTemp(100,'C'));

function reverseWord(word) {
  if (word === "") return "invalid string";

  let splitedArr = word.split(" ");

  for (let w of splitedArr) {
    reversed(w);
  }
}
