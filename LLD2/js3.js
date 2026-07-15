// // // var a = 1;
// // // let b = 2;

// // // function first() {
// // //   console.log("A:", a);
// // //   console.log("B:", b);
// // //   var a = 10;
// // //   let c = 30;

// // //   function second() {
// // //     console.log("C:", c);
// // //     console.log("B inside second:", b);
// // //   }

// // //   second();
// // //   console.log("A after:", a);
// // // }

// // // first();
// // // console.log("Global A:", a);

// // // function createCounter(params) {
// // //   let count = 0;

// // //   function increment() {
// // //     // inner fn remembers the environment in which it was created
// // //     count += 1;
// // //     console.log("Count is ", count);
// // //   }
// // //   return increment;
// // // }

// // // const counter = createCounter(); // increment

// // // counter(); // 1
// // // counter(); // 2
// // // counter(); // 3

// // /**
// //  * StepsL:
// //  * 1. createCounter creates a lexical env ( containing count, increment )
// //  * 2. increment is created -> link to environment where it was defined
// //  * 3. increment fn is returned
// //  * 4. createCounter context destroyed
// //  * 5. increment still maintains reference to its lexical env
// //  * 6. whenever the call happens for increment , it has access to its env
// //  *
// //  *
// //  */

// // // let label = "Global";

// // // function wrapper() {
// // //   let label = "wrapper";
// // //   function showLabel() {
// // //     console.log(label);
// // //   }
// // //   showLabel();
// // // }

// // // wrapper();

// // // function outer() {
// // //   let x = 10;
// // //   function showX() {
// // //     console.log(x);
// // //   }
// // //   x = 20;
// // //   x = 40;
// // //   return showX;
// // // }

// // // const fn = outer();
// // // fn();

// // function createCounter(params) {
// //   let count = 0;

// //   function increment() {
// //     // inner fn remembers the environment in which it was created
// //     count += 1;
// //     console.log("Count is ", count);
// //   }
// //   return increment;
// // }

// // const firstCounter = createCounter(); // env1
// // const secondCounter = createCounter(); // env 2

// // console.log(firstCounter()); // 1
// // console.log(firstCounter()); // 2
// // console.log(secondCounter()); // 1
// // console.log(firstCounter()); // 3
// // console.log(secondCounter()); // 2

// // function makeMultiplier(factor) {
// //   function multiply(number) {
// //     return number * factor;
// //   }
// //   return multiply;
// // }

// // const double = makeMultiplier(2); // multiply
// // const triple = makeMultiplier(3);

// // console.log(double(5));
// // console.log(triple(5));

// // function incrementGlobal(){
// //     let count = 0;
// //     count = count + 1;
// //     return count;
// // }

// // function createCounter(startValue) {
// //   let count = startValue;

// //   function increment() {
// //     count = count + 1;
// //     return count;
// //   }
// //   function decrement() {
// //     count = count - 1;
// //     return count;
// //   }
// //   function getValue() {
// //     return count;
// //   }
// //   function reset() {
// //     count = startValue;
// //     return count;
// //   }
// //   return {
// //     increment: increment,
// //     decrement: decrement,
// //     getValue: getValue,
// //     reset: reset,
// //   };
// // }

// // const counter = createCounter(10);

// // console.log(counter.increment()); // 1 - object.property
// // console.log(counter.increment()); // 12
// // console.log(counter.decrement()); // 11
// // console.log(counter.getValue()); // 11
// // console.log(counter.reset()); // 10

// function createBankAccount(initialBalance) {
//   let balance = initialBalance;
//   function deposit(amount) {
//     if (amount <= 0) {
//       return "Deposit amount must be positive";
//     }

//     balance = balance + amount;
//     return balance;
//   }

//   function withdraw(amount) {
//     if (amount <= 0) {
//       return "withdrawal amount must be positive";
//     }

//     if (amount > balance) {
//       return "insufficient balance";
//     }
//     balance -= amount;
//     return balance;
//   }

//   function getBalance() {
//     return balance;
//   }
//   return {
//     deposit: deposit,
//     withdraw: withdraw,
//     getBalance: getBalance,
//   };
// }

// const account = createBankAccount(1000);
// // console.log(account.deposit(500));
// // console.log(account.withdraw(2000));

// account.balance = 9999; //
// console.log(account);
// console.log(account.getBalance());
