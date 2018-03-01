'use strict';

const users = [{
  id: 1,
  name: 'ryan',
  email: 'ryan@codeup.com',
  languages: ['clojure', 'javascript']
},
{
  id: 2,
  name: 'luis',
  email: 'luis@codeup.com',
  languages: ['java', 'scala', 'php']
},
{
  id: 3,
  name: 'zach',
  email: 'zach@codeup.com',
  languages: ['javascript', 'bash']
},
{
  id: 4,
  name: 'fernando',
  email: 'fernando@codeup.com',
  languages: ['java', 'php', 'sql']
},
{
  id: 5,
  name: 'justin',
  email: 'justin@codeup.com',
  languages: ['html', 'css', 'javascript', 'php']
}
];

const filtered = users.filter(user => user.languages.length > 2);

const emails = users.map(user => user.email);

const reduced = users.reduce((acc, user) => {
  acc[user.id] = user;
  return acc;
}, {});

// Bonuses
const fruits = ['cantaloupe', 'orange', 'date', 'elderberry', 'ugli fruit', 'pineapple'];
const customers = [{
  name: 'Fred',
  age: 58,
  occupation: 'Police Officer',
  noOfPurchases: 4
},
{
  name: 'Samantha',
  age: 54,
  occupation: 'Teacher',
  noOfPurchases: 18
},
{
  name: 'Charles',
  age: 38,
  occupation: 'Librarian',
  noOfPurchases: 9
}
];
// PROBLEM 1 - create an array of the first letters of each fruit
const letterFruit = fruits.map(fruit => fruit[0]);
console.log(letterFruit);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
const customerInfo = customers.map(({name, age}) => {
  return {
    name,
    age
  };
});
console.log(customerInfo);

// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
const civilServants = customers.filter(customer => customer.occupation === 'Police Officer' || customer.occupation === 'Teacher');
console.log(civilServants);

// PROBLEM 4 - determine the average age of customers
const avgAge = customers.reduce((avg, customer) => {
  return (avg + customer.age / customers.length);
}, 0);
console.log(avgAge);

const names = ['John', 'Max', 'Ronald'];
// Create an array where all names are given a last name of Smith.
const lastNames = names.map(name => `${name} Smith`);
console.log(lastNames);

// Create an array where each word is in all caps
const cappedNames = lastNames.map(name => name.toUpperCase());
console.log(cappedNames);

// Create an array where all names have more than 3 letters
const filteredNames = lastNames.filter(name => name.slice(0, -6).length > 3);
console.log(filteredNames);

// Create an array of names with only the last two letters of each name
const slicedNames = names.map(name => name.slice(-2));
console.log(slicedNames);

// Create a total count of all letters
const letterCount = names.reduce((acc, name) => {
  acc += name.length;
  return acc;
}, 0);
console.log(letterCount);

// Create a string of all letters in alphabetical order
const alpha = names => {
  return names.join('').toLowerCase().split('').sort().join();
};
console.log(alpha(names));

// Create an array of word objects with properties of wordLength, firstLetter, lastLetter
const props = names.map(name => ({wordLength: name.length, firstLetter: name[0], lastLetter: name[-1]}));
console.log(props);

// Create a string of all vowels in the entire array of names
const vowels = names => {
  return names.join('').match(/[aeiou]/gi).length;
};
console.log(vowels(names));

// Create a single object with properties
const singleObj = names.reduce((acc, name, i) => {
  acc[i] = name;
  return acc;
}, {});

console.log(singleObj);
