let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

// break and continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Five");
        break;
    }
    console.log(i);
}

Functions

function mySelf(name) {
  console.log("My name is John Doe");
}

// Funtion with parameter
function mySelf(name) {
  console.log("My name is ", name);
}

mySelf("Joshua Annan-Takyi");
mySelf("Josh");

function add(x, y) {
  let sum = x + y;
  console.log(sum);
}

add(5, 6);

function multiplication(a, b) {
  let multiply = x * y;
  console.log(multiply);
}

// function with return value
function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(10, 15);
let newResult = result * 2;
console.log(newResult);

// Arrow function
let divide = (a, b) => a / b;
let multiply = (a, b) => {
  let sum = a * b;
  return sum;
};
console.log(divide(10, 5));
console.log(multiply(10, 5));

// Higher order function
// Is a function that takes a function as parameter
// map
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squares = numbers.map((number) => number * number);
console.log(squares);
let double = numbers.map((number) => number + number);
console.log(double);

// filter
let evens = numbers.filter((number) => number % 2 === 0);
let odd = numbers.filter((number) => number % 2 !== 0);
console.log(evens);
console.log(odd);

// find
let five = numbers.find((num) => num === 5);
console.log(five);

// String
let sentence = "The quick brown dog jumps over the lazy dog";
console.log(sentence);
console.log(sentence.length);
console.log(sentence.charCodeAt(10));
console.log(sentence.concat(" from concatenation"));
console.log(sentence.endsWith("dog"));
console.log(sentence.includes("brown"));
console.log(sentence.indexOf("q"));
console.log(sentence.lastIndexOf("o"));
console.log(sentence.padEnd("10"));
console.log(sentence.repeat("2"));
console.log(sentence.replace("lazy", "hardworking"));
console.log(sentence.slice(20, 30));
console.log(sentence.substring(20, 30));
console.log(sentence.split(" "));
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
