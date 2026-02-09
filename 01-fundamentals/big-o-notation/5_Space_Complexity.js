/*
   3 PILLARS OF PROGRAMMING 
   - Readable
   - Memory (Space Complexity)
   - Speed (Time Complexity)

   When aprogram executes it uses 2 ways to remember things
   a. Heap: Where we store the variables
   b. Stack: Where we store the functions 


   WHAT CAUSES SPACE COMPLEXITY?
   - Adding Variables
   - Adding Data Structures
   - Function calls
   - Allocations
*/

//Lets use the example to understand this:

function boooo(n) {
    for (let i = 0; i < n.length; i++){
        console.log('boooo!')
    }
}

boooo([1,2,3,4,5])// 0(1)
// This is O(1) complexity because it only contains a variable

function arrayOfHiNTimes(n){
    let hiArray = [];

    for (let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }

    return hiArray;
}


arrayOfHiNTimes(6) //O(n)
