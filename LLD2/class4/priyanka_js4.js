/*
Q1. Write a function called convertTemp that takes two arguments: a number (the temperature) and a string 
(the unit, either "C" or "F"). If the unit is "C", convert the temperature to Fahrenheit. If the unit is "F", 
convert it to Celsius. Return a string that describes the result.


Formulas


Test scenarios
convertTemp(100, "C")  // "100°C is 212°F"
convertTemp(32, "F")   // "32°F is 0°C"
convertTemp(0, "C")    // "0°C is 32°F"


function convertTemp(temp, unit) {
if (unit === "C") {
let fahrenheit = (temp * 9/5) + 32;
return fahrenheit;
}
else{
    return }



function reverse(str){
    let[] arr= str.split(" ");
    for(int i=0; i<arr.length;i++){
    let temp=arr[i];
    let rev="";
    for(int j=0; j<temp.length;j++){ 
        rev= temp[j]+rev

    }
}
    categorizeStudents(students);
// Expected output:
// {
//   toppers: ["Alice", "Diana"],
//   cool: ["Bob", "Frank"],
//   superCool: ["Charlie", "Eve"]
// }

*/



function categorizeStudents(students){
    let ressult ={ };
if(students.score < 50){
    
}
else if(students.score >= 50 && students.score < 80){

}
else if(students.score >= 80){
}

const encode3 = createEncoder(3);
console.log(encode3("hello"));     // "khoor"
console.log(encode3("xyz"));       // "abc"

const encode1 = createEncoder(1);
console.log(encode1("abc"));

function createEncoder(shift) {
    const s=shift;
    function encode(str) {
        let res= "";
        if(s>0){
            for each index in str{
                str.charAt(index) + s;
            }