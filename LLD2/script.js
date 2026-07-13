// // // // // // // // // // console.log("hello world from script.js");

// // // // // // // // // // var a = 30;
// // // // // // // // // // console.log(a);

// // // // // // // // // var val = true;
// // // // // // // // // console.log(val);
// // // // // // // // // console.log(typeof val);

// // // // // // // // // /**
// // // // // // // // //  * some code here
// // // // // // // // //  */

// // // // // // // // // val = "scaler";
// // // // // // // // // console.log(val);
// // // // // // // // // console.log(typeof val);

// // // // // // // // // var x = 10;
// // // // // // // // // // some code
// // // // // // // // // // some code
// // // // // // // // // // some code
// // // // // // // // // // some code
// // // // // // // // // // some code
// // // // // // // // // var x = 20; //. redeclaration is allowed with var
// // // // // // // // // console.log(x);

// // // // // // // // // // block scope
// // // // // // // // // // ES6 - 2016 - let const
// // // // // // // // // let city = "Delhi";
// // // // // // // // // console.log(city);

// // // // // // // // // // let city = "Mumbai"; // re-declaration is not allowed
// // // // // // // // // // console.log(city);
// // // // // // // // // city = "Mumbai"; // re-assignment is allowed
// // // // // // // // // console.log(city);

// // // // // // // // // const pi = 3.14;
// // // // // // // // // pi = 3.15;
// // // // // // // // // console.log(pi); // re-assignment is not allowed

// // // // // // // // {
// // // // // // // //   let age = 20;
// // // // // // // //   const city = "Delhi";
// // // // // // // //   console.log("inside", age);
// // // // // // // //   console.log(city);
// // // // // // // // }

// // // // // // // // // if(){

// // // // // // // // // }
// // // // // // // // // while(){}
// // // // // // // // // c
// // // // // // // // // onsole.log(age);
// // // // // // // // console.log(city);

// // // // // // // {
// // // // // // //   var age = 20;
// // // // // // // }
// // // // // // // console.log(age);

// // // // // // // // const name = "Abhishek";
// // // // // // // // name = "Shrey";
// // // // // // // // // let name = "Shrey";

// // // // // // // let a = 10;
// // // // // // // let b = 10.5;
// // // // // // // let c = 2 / 0;
// // // // // // // let d = "hello" / 2;

// // // // // // // console.log(a, b, c, typeof d);

// // // // // // // let str1 = "hello";
// // // // // // // let str2 = "hello 2";
// // // // // // // let str3 = `Hi template literal`;

// // // // // // // let users = 100000;
// // // // // // // console.log("there are " + users + " users online");
// // // // // // // console.log(`there are ${users} users online`);

// // // // // // // const val = `asdadsa
// // // // // // // adadasdasda
// // // // // // // dfgfdgdfg
// // // // // // // dgdfgdfgdfg`;

// // // // // // // console.log(val);

// // // // // // let x;
// // // // // // console.log(x);

// // // // // // let y = null;
// // // // // // console.log(y);

// // // // // const arr = [
// // // // //   1,
// // // // //   "Scaler",
// // // // //   true,
// // // // //   null,
// // // // //   undefined,
// // // // //   [1, 2, 3],
// // // // //   { name: "Abhishek" },
// // // // // ];

// // // // // console.log(arr.length);
// // // // // console.log(arr[arr.length - 1]);
// // // // // console.log(arr[0]);

// // // // // arr.push("new value");
// // // // // console.log(arr);

// // // // // arr.pop();
// // // // // console.log(arr);

// // // // const person = {
// // // //   name: "Soham",
// // // //   age: 25,
// // // //   isStudent: true,
// // // // };

// // // // console.log(person.name);
// // // // console.log(person["age"]);
// // // // console.log(person.isStudent);

// // // function serverBeverage() {
// // //   console.log("serving tea");
// // //   console.log("serving tea 1");
// // //   console.log("serving tea 2");
// // //   console.log("serving tea 3");
// // // }

// // // serverBeverage();

// // let num1 = 100;
// // let num2 = num1; // copy the value
// // console.log(num1, num2);
// // num2 = 200;
// // console.log("2nd", num1, num2);

// // const arr1 = [1, 2, 3];
// // const arr2 = arr1; // copy the reference ( address )
// // arr2.push(4);

// // console.log(arr1);
// // console.log(arr2);

// // c

// // console.log("1.", 5 == "5"); // true type coercion
// // console.log("2.", 5 === "5"); // false // does not triger type coercion
// // console.log("3.", 0 == false); // true type coercion
// // console.log("4.", 0 === false); // fakse
// // console.log("5.", "" == 0); // true // type coercion
// // console.log("6.", null == undefined); // true
// // console.log("6.", null === undefined); // true

// // logical operators && || !

// const age = 25;
// const hasLicense = false;

// const canDrive = age >= 18 && hasLicense;
// console.log(canDrive);

// const isWeekend = false;
// const isHoliday = true;
// const canSleep = isWeekend || isHoliday;

// loops

// const skills = ["HTML", "CSS", "JS", "Git"]; // 4 i = 0,1,2,3
// for (let i = 0; i <= skills.length - 1; i++) {
//   // 0 ,1 ,2, 3 , 4
//   // i = 0
//   console.log(`Skill ${i + 1}: ${skills[i]}`);
// }

// for (const skill of skills) {
//   console.log(skill);
// }

// let user = new Object() // object constructor syntac
let cricketer = {
  name: "Virat",
  age: 38,
  address: {
    country: "India",
    city: {
      name: "Delhi",
      pincode: 110011,
    },
  },
  allies: ["Rohit", "Bumrah"],
  sayHi: function () {
    console.log("Virat says :let's chase the target");
  },
};

console.log(cricketer.address.city.pincode);

cricketer.sayHi(); //

cricketer.isCaptain = true;
cricketer.favFood = "Chole";

delete cricketer.isCaptain;
console.log(cricketer);

for (const key in cricketer) {
  //   console.log("hello");
  console.log(`${key}: ${cricketer[key]}`);
}
