# DCIT202 Assignment 1

## Name: [Oswald Amoah](https://github.com/oswaldamoah/)

## Student ID: 11046928

### About
This repository contains the JavaScript code for DCIT202 Assignment 1
 
### Task 1 (**arrayManipulation.js**):
Task 1 requires creating a function named `processArray` in `arrayManipulation.js`. This function takes an array of numbers as input and returns a new array where:
- Even numbers are squared.
- Odd numbers are tripled.

### Task 2 (**arrayManipulation.js - continued**):
Task 2 extends `arrayManipulation.js` with a new function called `formatArrayStrings`. This function receives two arguments:
1. An array of strings.
2. An array of numbers (processed by the `processArray` function from Task 1).
The function modifies each string in the string array based on the corresponding number in the processed number array:
- If the number is even, the entire string is converted to uppercase.
- If the number is odd, the string is converted to lowercase.

### Task 3 (**userInfo.js**):
Task 3 involves creating a new file named `userInfo.js`. This file defines a function called `createUserProfiles` that takes two arrays as arguments:
1. An array of original names (strings).
2. The array of modified names generated by the `formatArrayStrings` function in Task 2.
The `createUserProfiles` function returns an array of objects, where each object represents a user profile. The user profile object contains the following properties:
- `originalName`: The original name from the first input array. 
- `modifiedName`: The modified name from the second input array.
Both originalName and modifiedName are imported from `arrayManipulation.js`
- `id`: An auto-incremented ID starting from 1 for each user profile.

    Each object is stored in the `details` array.

### Task 4 (**ReadMe.md**):
Task 4 requires creating a comprehensive ReadMe file that provides a brief overview of the tasks and code functionality.


