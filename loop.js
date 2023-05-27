//Looping in Js

// 1. "for" Loop

// for (initialization; condition; increment/decrement) {
//   // Code to be executed in each iteration
// }

// for (let i = 0; i < 5; i++){
//     console.log(i);
// }

//2 While Loop

// while (condition) {
//     // Code to be executed in each iteration
//     // The condition should change at some point to avoid an infinite loop
// }

// let i = 0;
// while (i < 5){
//     console.log(i)
//     i++;
// }

// 3. do - while loop

// do {
//     // Code to be executed in each iteration
//     // The condition should change at some point to avoid an infinite loop
//   } while (condition);
//  let i = 0; 
// do {
//     console.log(i)
//     i++;
// } while (i < 5);

//Arrays

// let shop = ["Garri", "Egg", "Fried Rice", 25, "Sugar", "Groundnut", "Water"];
//1. index: 0, 1, 2, 3, 4, 5, 6 ....
// let space = shop[6];
// console.log(space);

//2. length
// let length = shop.length;
// console.log(`Array Lenght is: ${length}`);

//3. push
// shop.push("Smoked Fish")
// console.log(shop);

//4 pop
// let lastItem = shop.pop();
// console.log(lastItem)

//Object 
const shopManagerBioData = {
    name: "John Doe",
    DOB: new Date("12/9/2000"),
    state: "Enugu",
    Age: 23, 
    statesVisited: ["Kano", "Edo"],
}

// console.log(shopManagerBioData);
//1.  Object.values
let value = Object.values(shopManagerBioData);
console.log(value);

//2. Object.entries
let entries = Object.entries(shopManagerBioData);
console.log(entries);


//Example
let shop = ["Garri", "Egg", "Fried Rice", 25, "Sugar", "Groundnut", "Water"];
let numberOfItem = 0;

for(let i =0; i < shop.length; i++){
    numberOfItem++;
}

console.log(`The number of Items in this shop is: ${numberOfItem}`);

// Example
let counter = 1; 
 while (counter <= 5){
    console.log(counter)
    counter++;
 }

 