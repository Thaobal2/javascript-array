"use strict";

const fruits = [
  "Apple",
  "Orange",
  "Banana",
  "Grape",
  "Pineapple",
  "water melon",
  "Mango",
  "Pawpaw",
  "straw berry",
];
const fruits2 = [
  "Apple",
  "Orange",
  "Grape",
  "Banana",
  "Pineapple",
  "Pawpaw",
  "Apple",
  "Grape",
  "Pineapple",
  "water melon",
  "Pineapple",
  "Mango",
  "Pawpaw",
  "Pineapple",
  "Apple",
  "straw berry",
];

const numbers = [1, 4, 6, 10, 6, 2, 9, 8, 3, 5, 3, 6, , 9, 1, 4, 2, 8];

//Using map method. : add ! to each og the  fruit array items

const mapFruit = fruits.map((fruit) => {
  fruit = fruit + "!";
  return fruit;
});
console.log(mapFruit);

// Using filter method. : remove fruits items that has six letters

const filteredFruit = fruits.filter((fruit) => {
  return fruit.length === 6;
});
console.log(filteredFruit);

// Using Reduce Exercise, : Sum up the instances of each of fruits.

const reduceFruits = fruits2.reduce((acc, fruit) => {
  if (!acc[fruit]) {
    acc[fruit] = 0;
  }
  acc[fruit]++;
  return acc;
}, []);
console.log(reduceFruits);

// Using reduce to sum up the total numbers in the array

const reduceNumber = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

console.log(reduceNumber);

// Using sort method to sort the array alphabetically

const sortedFruits = fruits.sort((a, b) => (a > b ? 1 : -1));

console.log(sortedFruits);

const sortedNumbers = numbers.sort((a, b) => (a > b ? 1 : -1));

console.log(sortedNumbers);

// Object in array example

const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

// 1

const updatedArray = [];

array.forEach((user) => {
  let { username } = user;
  username = username + "!";
  updatedArray.push(username);
});

console.log("forEach", updatedArray);
