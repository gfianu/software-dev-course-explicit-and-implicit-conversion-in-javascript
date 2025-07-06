/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Part 1: Debugging Challenge
// Fixing the first line to ensure explicit type conversion
result = Number("5") - 2; // Convert string "5" to number before subtraction
console.log("The result is: " + result); // Now it will output 3  
// Fixing the second line to ensure correct boolean conversion
isValid = Boolean("false"); // This is already correct, but let's clarify it
if (isValid) {
    console.log("This is valid!"); // This will always log because "false" is a non-empty string
}
// Fixing the age calculation to ensure explicit type conversion
age = Number(age); // Convert string "25" to number before addition
totalAge = age + 5; // Now it will correctly add 25 and 5
console.log("Total Age: " + totalAge); // Now it will output 30   
// Part 2: Write Your Own Examples  
// Implicit type conversion example
let implicitResult = "10" + 5; // JavaScript implicitly converts 5 to a string
console.log("Implicit Conversion Result: " + implicitResult); // Outputs "105"
// Explicit type conversion example
let explicitResult = Number("10") + 5; // Explicitly converting "10"
console.log("Explicit Conversion Result: " + explicitResult); // Outputs 15
// Edge case example with NaN
let edgeCaseResult = Number("not a number") + 5; // This will result in NaN
console.log("Edge Case Result: " + edgeCaseResult); // Outputs NaN
// Edge case example with null
let nullResult = Number(null) + 5; // null is converted to 0
console.log("Null Result: " + nullResult); // Outputs 5
// Edge case example with undefined
let undefinedResult = Number(undefined) + 5; // undefined is converted to NaN
console.log("Undefined Result: " + undefinedResult); // Outputs NaN
// Edge case example with Boolean conversion
let booleanResult = Boolean(0) + 5; // 0 is falsy, so Boolean(0) is false
console.log("Boolean Result: " + booleanResult); // Outputs 5 (false is treated as 0 in arithmetic)
// Edge case example with empty string
let emptyStringResult = Number("") + 5; // Empty string is converted to 0
console.log("Empty String Result: " + emptyStringResult); // Outputs 5    