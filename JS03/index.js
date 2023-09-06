// ! FUNCTIONS 

// ?  It's a reusable block of code that performs a specific task. Functions help us avoid repeating the same code and make our programs more organized and easier to manage.

// !=🗒️SYNTAX



// ! ⚠️**Function Parameters** 
// ?✅Parameters are like placeholders that allow you to pass data into a function. 

function functionName(a, b) {  // parameter ()

    // function body
    // code to perform a specific task
    return a + b;
}

//  parameters  and arguments

// ?👉 calling a function

console.log(functionName(1, 3)) //argument
console.log(functionName(2, 4))



function square(num) {
    let a = "anything"
    return num * num
}


console.log(square(10))

// ! Scope 

// Scope refers to where variables are accessible in your code. Variables can have either local or global scope, and this impacts where they can be used.


const globalVar = 10;

function globalCheck() {
    console.log(globalVar)

}

globalCheck()

function localCheck() {
    //block scope or local scope
    var inner = 10
    let localVar = 1000000;

}


