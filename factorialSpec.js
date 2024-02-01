const { default: test } = require("node:test");
const factorial = require("./factorial.js");
const { describe } = require("yargs");

console.log(factorial(0) === 1);
console.log(factorial(1) === 1);
console.log(factorial(2) === 2);
console.log(factorial(4) === 24);
console.log(factorial(8) === 40320);
console.log(factorial(18) === 6402373705728000);
// Test how high of a number your program can calculate. Can you push it further?



describe("test all numbers", () =>{
    test("test factorial(4) = 24", () => {
    expext(factorial(4)).tobe(24);  
    })

    test("test factorial(5) = 120", () => {
    expext(factorial(5)).tobe(120);
    })

    test("test factorial(6) = 720", () => {
    expext(factorial(6)).tobe(720);
    })
})