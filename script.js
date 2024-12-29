// Question 1 Task 1
let fruits = ['apple', 'banana', 'orange'];

fruits.push("kiwi");
fruits.push("grapes")

removedFruit = fruits.pop()

console.log(fruits);
console.log(removedFruit)

// Question 1 Task 2
let numbers = [3, 1, 5, 2, 4];

sortedNumbers = numbers.sort()

console.log(sortedNumbers)

// Question 1 Task 3
let numbers1 = [3, 1, 5, 2, 4];

doubledNumbers = numbers1.map(num => num * 2);
evenNumbers = numbers1.filter(number => number % 2 === 0);
sum = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(doubledNumbers)
console.log(evenNumbers)
console.log(sum)
