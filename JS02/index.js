// ! control structure (if/else)

// ? Control structures in JavaScript allow your code to make decisions and execute different actions based on conditions.

let temp = 18;
let humidity  = 69;

if(temp> 20){ 
    // nesting of if 
    if(humidity>70){
        // console.log("It's a hot and humid")
    }else{
        // console.log("It's a warm day! 🌞");
    }
}else{
    // console.log("it is a cooler day")
}


// ! LOOPS IN JS
// ? Loops in JavaScript are essential for automating repetitive tasks and controlling the flow of your code. They allow you to execute a block of code multiple times, making your programs more efficient and flexible.

//! FOR LOOP


// ? A "for" loop is like a chef's recipe for repetition. It's used when you know exactly how many times you want to repeat an action.

//? 👉 syntax
 

// for(initilization; condition; iteration){
//     //code to be executed
// }

// - Initialization: You set an initial value before the loop starts.
// - Condition: The loop continues as long as this condition is true.
// - Iteration: You specify how the loop variable changes with each iteration.


// ✅ for printing count from 1 to 5

for(let i =0; i<=5; i++ ){
    // console.log(i)  
     //1   1
    // 2  // 2
    //3  //3
    //4 //4
    //5 // 5
    // 6 nahi=>> loop terminates 
}

// !🗒️ how do loop works
// 1. **Initialization: The loop begins with an initial value of `i` (often 0) before entering the loop.**
// 2. **Condition Check: The condition `i < 5` is evaluated before each iteration. If it's true, the loop continues; if false, the loop terminates.**
// 3. **Code Execution: The code block inside the loop is executed during each iteration. In this example, we're logging the value of `i` to the console.**
// 4. **Iteration: After each iteration, the value of `i` is incremented (or decremented, depending on your loop setup). It represents the progress of the loop.**
// 5. **Repeating: The loop repeats steps 2 to 4 until the condition is no longer true. In this case, when `i` becomes 5 or greater, the loop terminates.**



// ! while loop
// ? The loop keeps running as long as the specified condition remains true.
// while(condition){
    // code executution
// }

let count = 5
while(count>=1){
    console.log(count)
    count--
}

// ! 3. Do...While Loop:

// ?This loop executes the code block at least once, even if the condition is initially false.
// do{

// }
// while(condition){

// }
let roll;
do{
    roll = Math.ceil(Math.random()*6);
    console.log(`you rolled a ${roll}`);
}while(roll!==6);