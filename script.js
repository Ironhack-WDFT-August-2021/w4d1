// es 6 

// differences between var and let

// var get's hoisted - let does not
// var num;
console.log(num); // -> undefined
var num = 23;

// you can redeclare a variable with var
// you cannot redeclare using let
// var user = 'foo';
// var user = 'bar';
// console.log(user) // -> this works

console.clear();

// scoping

var message = 'hello from global scope';

// var is function scoped
function helloFromLocalScope() {
	var greeting = 'hello from local scope';
	// console.log(greeting);
	return greeting
}

console.log(message);
// console.log(greeting) // -> this is not defined / Error
const msg = helloFromLocalScope();
console.log(msg);

// var is not scoped to this block
if (5 > 3) {
	var city = 'Berlin';
}

console.log(city);

console.clear();

// let is block scoped 

if (true) {
	let cat = 'Tom'
}

// console.log(cat) // -> not defined
function display() {
	let content = 'hello world'
}

// console.log(content) // -> not defined 

console.clear();

// ternary operator

const password = 23;

// let user;

// if (password === '123') {
// 	user = 'authenticated'
// } else {
// 	user = 'unauthenticated'
// }

// <condition> ? <doThis> : <otherwiseDoThat>
let user = password === '123' ? 'authenticated' : 'unauthenticated'

// console.log('user: ', user)


// object shorthand

console.log({ user: user })
// short version: we just use one word
console.log({ user })
const mouse = 'jerry';
console.log({ mouse })
console.clear();


// Destructuring
// Objects
const person = {
	userName: 'ironhacker',
	age: 35,
	hobby: 'chess',
	address: {
		street: 'friedrichstr.',
		town: 'berlin'
	}
}

// we want 3 variables with the values from the object
// const userName = person.userName;
// const age = person.age;
// const hobby = person.hobby;

// same result using object destructuring
const { userName, age, hobby } = person;
// you can alias a variable by using the colon
// const { userName: name, age, hobby } = person;
// you can also destructure nested properties
// const { userName, age, hobby, address: { town, street } } = person;

// console.log(userName, age, hobby, street, town);

const userX = {
	first: 'Michael',
	middle: 'Peter',
	last: 'Miller'
}

// write a function that receives the user object, destructures
// the keys and returns a string with all the names
function output(user) {
	const { first, last, middle } = user
	return `${first} ${last} ${middle}`;
	// return `${user.first} ${user.last} ${user.middle}`;
}

// bonus: destructure in the parameter list 
// function output({ first, last, middle }) {
// 	// const { first, last, middle } = user
// 	return `${first} ${last} ${middle}`;
// 	// return `${user.first} ${user.last} ${user.middle}`;
// }
console.log(output(userX));

console.clear()

// Array destructuring
// const numbers = ['one', 'two', 'three'];


// const [third, xyz] = numbers;
// you can skip elements
// const [, , third] = numbers;
// console.log(a, b, c)
// console.log(xyz)

// setting a default value -> use the value of a 4th element 
// in the array if this is present but if not use 9
const [, , thirdVal, fourth = 9] = [1, 3, 5, 7];
// console.log(thirdVal, fourth)
const [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // -> 3, 4, undefined, 1

// you can also destructure from a string
const [g, h, j] = 'hello';
console.log(g, h, j)

// spread operator
const myNumbers = [23, 32, 7];
const maxNum = Math.max(...myNumbers);
console.log(maxNum)
const copy = [...myNumbers];
console.log(copy)
const otherNumbers = [1, 2, 3];
const combined = [...otherNumbers, ...myNumbers];
console.log(combined);

console.clear()
// function that sums a variable amount of parameters
// we use 'spread' -> numbers is now an array containing all the 
// parameters
function sum(...numbers) {
	return numbers
	// return numbers.reduce(function (acc, val) {
	// 	return acc + val
	// })
}
const input = [2, 3, 5, 7, 9]
const result = sum(2, 3, 5, 7, 9);
console.log(result)

console.clear();
// Objects

const car = {
	make: 'Volvo',
	year: 1995,
	engine: {
		fuel: 'petrol',
		hp: 80
	}
}


// extract the make and year from the car in one line
const { make, year } = car;
console.log(make, year)

// extract the fuel and hp from the car in one line

// const { fuel, hp } = car.engine
const { engine: { fuel, hp } } = car;
console.log(fuel, hp);


// Arrays

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// Extract the first two values

const [zero, one] = numbers
console.log(zero, one); // 0 1

// Extract all the values but the first one from the array
const [, ...greaterThan0] = numbers;
console.log(greaterThan0); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// Strings

const str = "Hello World!"

// Using the spread, return an array of all characters in `str` upperCased and reversed
const reversedUppercase = [...str.toUpperCase()].reverse();
console.log(reversedUppercase); // [ '!', 'D', 'L', 'R', 'O', 'W', ' ', 'O', 'L', 'L', 'E', 'H' ]
console.log('hello');

// arrow functions
// const evens = numbers.filter(function (num) {
// 	return num % 2 === 0
// });
// can be refactored to this:
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);

const test = () => {
	const msg = 'hello';
	return msg
}

const greet = () => 'hello'

class Person {
	constructor() {
		this.age = 0;
	}

	// using the arrow function 'this' get's the 
	// correct context of Person
	growUp() {
		// const that = this;
		setInterval(() => {

			this.age++
			console.log(this.age)
		}, 1000)
	}
}

const p = new Person();
console.clear();

// Promise - a JS object that represents the eventual completion
// or failure of an asynchronous operation
// A Promise can have 3 states: 1. resolved (success) 2. rejected (failure) 
// 3. pending (undecided)
function createRandomNumber(min, max) {
	return new Promise((resolve, reject) => {
		// if the arguments passed are not exactly 2 -> then we have an error
		if (arguments.length !== 2) {
			reject(new Error('Invalid number of arguments 🙈'));
		}
		setTimeout(function () {
			resolve(Math.floor(Math.random() * (max - min + 1) + min))
		}, 3000)
	})
}
// this does not work for async functions that return promises
// console.log(createRandomNumber(1, 100))

// we can use .then().catch()
createRandomNumber(1, 100)
	.then(function (randomNumber) {
		console.log(randomNumber);
	})
	.catch(function (err) {
		console.log(err.message);
	})

// we can use async await
async function getNumber() {
	// for the error handling we use try catch
	try {
		const randomNumber = await createRandomNumber(1);
		console.log(randomNumber);
	} catch (err) {
		console.log(err.message);
	} finally {
		console.log('this executes always');
	}
}
getNumber();