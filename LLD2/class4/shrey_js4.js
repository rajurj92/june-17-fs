// function convertTemp(String s, Number num){ // we dont keep data types in JS
//     if(s=='C'){
//         temp = (num-32) / 1.8;
//     }else if(s=='f'){
//         temp = (num*1.8) + 32;
//     }
//     return temp;
// }

// Q2
// function wordRev(s){
//     s.split(" ");
//     reverse(s).join();

// }
// function reverse(s){
//     stringBuilder sb = new stringBuilder();
//     int i=0;
//     int j=s.length();
//     while(i<j){

//     }
// }

// 1. iterate on students
// 2.  compare scores
// 3. if(score>80) => topper
// 4. if(score>=50 && score <=79) => cool
// 5. if(score<50) => super cool;

function createEncoder(num) {
  function shift(word) {
    // logic of shifting
    const safeShift = ((num % 26) + 26) % 26;
  }
  return shift;
}
