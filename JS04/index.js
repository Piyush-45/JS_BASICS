// ! Create a function isEven(number) that checks if a number is even and returns true or false. Call the function and log the result.

function isEven(number) {
    //condtion
    // even number = divide / 2 === 0

    if (number % 2 == 0) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
}

// isEven(10)  // argument 

// !  Write a program that logs the numbers from 10 to 1 in descending order using a while loop.

// let number = 10;
// while(number >=1){
//     console.log(number)
//     number--
// }

// ! Create a function calculateSum(n) that calculates the sum of all numbers from 1 to n and returns the result. Call the function and log the sum.

function calculateSum(n) {

    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i // sum = sum + i
    }


    return sum;
}

// console.log(calculateSum(9)) 


// !Write a JavaScript function that counts the number of vowels (a, e, i, o, u) in a given string.


function countVowels(str) {
    // Convert the input string to lowercase to handle both uppercase and lowercase vowels
    str = str.toLowerCase();
    
    // Initialize a variable to keep track of the vowel count
    let vowelCount = 0;
  
    // Iterate through the string and check each character
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
   
      // Check if the character is a vowel (a, e, i, o, u)
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }

// console.log(countVowels("flowing frontend")) 

// ! Write a function grade(score) that assigns a letter grade (A, B, C, D, or F) based on a numeric score. Call the function with a score and log the result.

function grade(score){
    if(score >=90){
        return "A"
    }else if(score >= 80){
        return "B"
    }else if(score >=70){
        return "C"
    }else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// console.log(grade(100))

// ! Write a JavaScript function that takes an integer as input and returns "Fizz" if the number is divisible by 3, "Buzz" if it's divisible by 5, and "FizzBuzz" if it's divisible by both 3 and 5. Otherwise, return the number itself.


function fizzBuzz(number){

    if(number % 3 === 0 && number % 5 === 0){
        return "FIZZBUZZ"
    }else if(number % 3 === 0){
        return "FIZZ"
    }else if(number % 5 === 0){
        return "BUZZ"
    }else{
        return number
    }
}

// console.log(fizzBuzz(9))

// ! OUTPUT BASED QUESTION

function scopeExample() {
    let x = 10;

    if (true) {
        let y = 20;
        console.log(x); // What will this line output?   10
    }

    console.log(y); // What will this line output?  undefined
}

// scopeExample();

// ! 

let a = 5;  //GLOBAL VARIABLE

function scopeExample2() {
    let b = 10;  // functions scoped 
    console.log(a); // What will this line output?   // 5
    console.log(b); // What will this line output?  // 10 
}

scopeExample2();
console.log(a); // What will this line output?
console.log(b); // What will this line output?s