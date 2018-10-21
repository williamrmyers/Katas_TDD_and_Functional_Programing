const _ = require('lodash');
const fp = require('lodash/fp');
const R = require('ramda');

export const add = (x, y) => {
  if (typeof x != 'number' || typeof y != 'number') {
    return null;
  }

  return x + y
};


export const removeSNames = (names) => names.filter(name => name.charAt(0).toLowerCase() !== 's' );

// Welcome. In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

export const squareDigits = (number) => parseInt(number.toString().split('').map(val => Math.pow(parseInt(val), 2)).join(''));

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

export const isPangram = (string) =>  new Set(string.toLowerCase().match(/[a-z]/g)).size === 26;

// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java)
// for strings. All words must have their first letter capitalized without spaces.

// Object Oriented Solution
// export const camelCase = (string) => {
//   return string.split(" ").map(str => str.charAt(0).toUpperCase() + str.substr(1)).join('');
// }

// Solution
// This soution uses both Ramda and Lodash, and is completely point free. (And a little excessively Verbose)

export const camelCase = (string) => {
  const sentenceToArray = R.split(" ");

  // Partiall Application of Map
  const upper = R.map(_.upperFirst);

  const arrayToString = R.join('');

  //This is a composed function read from right to left.
  const camelCase = R.compose(arrayToString ,upper ,sentenceToArray);
  return camelCase(string);
}

// Simple Kata, Shout, add an exclamation point and convert to upper case.
// Solution is Functional and Point Free.

export const shout = (sentence) => {

  const exclaim = x => `${x}!`
  const shout1 = fp.compose(
    _.toUpper,
    exclaim
  );

  return shout1(sentence);
}

// Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.
// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Good OOP solution
// export const XO = (str) => ( str.replace(/x/gi, "").length === str.replace(/o/gi, "").length);

// Functional Point Free solution.
export const XO = (str) => {
  const X = R.replace(/x/gi, "");
  const O = R.replace(/o/gi, "");

  return R.length(X(str)) === R.length(O(str));
};
