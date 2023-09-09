// ! Variables
// ? In JavaScript, variables act as containers for storing data.

//   variable in detial; 

// step:1 Declaration   keyword + variable name 

// => let, var, const

var age; // ?Declaration using var

// step: 2. Assignment: 
age = 25; // ?number 


//? INITIALIZATION
let name = "123479";  // declaration + assignment === initialization
console.log(name)// string

let bool = false; // ?boolean
console.log(bool)

let middleName = null // ?null
console.log(middleName)

let jobtitle;


// ?👉 "null" is a value that represents intentional absence or lack of value. It is often used to indicate that a variable or property should have no value.

// ? 👉 "undefined" usually indicates that something hasn't been initialized or doesn't exist.


// ! ways of declaring variables in js

function check (){
    let bool = true
    
    console.log(bool)
}
check()

// Using const (for constants)
const pi = 3.14


// ! CONCLUSION
// ?In JavaScript, there are three primary ways to declare variables: **`var`**, **`let`**, and **`const`**.

// ? 1. **var:** This was the original way to declare variables in JavaScript. However, it has some limitations, such as variable hoisting (variables are moved to the top of their scope) and potential global scope leakage.
// ? 2. **let:** Introduced in ES6, **`let`** provides block-scoping, which means variables are limited to the block they are declared in. This helps avoid some of the issues associated with **`var`**.
// ? 3. **const:** Also introduced in ES6, **`const`** is used to declare constants, which are variables that cannot be reassigned after their initial value assignment. It enforces immutability, making it ideal for values that shouldn't change.

//⚠️⚠️ **Best Practice:**

//👉 - Use **`let`** when you expect the variable's value to change.
//👉 - Use **`const`** when the value should remain constant.
//👉 - Avoid using **`var`** due to its scope-related issues.

// !**Naming Conventions and Best Practices:**

// - Start with a letter, underscore (_), or dollar sign ($).
// - Subsequent characters can include letters, numbers, underscores, and dollar signs.
// - Avoid starting with a number or using special characters.

// - Use descriptive variable names for clarity.
// - Initialize variables when declaring them.
// - Prefer **`const`** for values that shouldn't change. like api_key or any mathematical constants, any url.
// - Use **`let`** for variables that need to be reassigned.