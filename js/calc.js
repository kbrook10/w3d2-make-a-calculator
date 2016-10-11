//Write function for addition logic with name add
function add(value1, value2){
    var answer = value1 + value2;
    // console.log(answer)//Used for testing purpose
    return answer //Used for the console.assert
}
//Write function for subtraction logic with name subtract
function subtract(value1, value2){
    var answer = value1 - value2;
    // console.log(answer)//Used for testing purpose
    return answer //Used for the console.assert
}
//Write function for division logic with name divide
function divide(value1, value2){
    var answer = value1 / value2;
    // console.log(answer)//Used for testing purpose
    return answer //Used for the console.assert
}
//Write function for multiplication logic with name multiply
function multiply(value1, value2){
    var answer = value1 * value2;
    // console.log(answer)//Used for testing purpose
    return answer //Used for the console.assert
}

//Test values for functions to ensure proper logic
// add(10, 10)
// subtract(100, 90)
// divide(10, 5)
// multiply(5, 2)

//Code to test for homework -> Explorer Mode
var answer
answer = add(40, 110)
console.assert(answer === 150)
answer = subtract(answer, 9)
console.assert(answer === 141)
answer = divide(answer, 6)
console.assert(answer === 23.5)
answer = multiply(answer, 2)
console.assert(answer === 47)

//Code for the Adventure Mode of Homework

//Write function for remainder logic with name modulo
function modulo(value1, value2){
    var answer1 = value1 % value2;
    console.log(answer1)//Used for testing purpose
    // return answer1 //Used for the console.assert
}
//Write function to increment by one function with name increment
function increment(value1){
    var answer1 = ++value1;
    console.log(answer1)//Used for testing purpose
    // return answer1 //Used for the console.assert
}
//Write function to decrement by one function with name decrement
function decrement(value1){
    var answer1 = --value1;
    console.log(answer1)//Used for testing purpose
    // return answer1 //Used for the console.assert
}
modulo(9,3) //this should return 0
increment(10) // this should return 11
decrement(20) // this should return 19
