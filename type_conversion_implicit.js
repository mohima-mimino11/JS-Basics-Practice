// implicit type conversion

const name = 'john';
const lastName = 'jordan';

const fullName = name + ' ' + lastName;

console.log(fullName);

const number = 4;
const number2 = 10;
const result = number + number2;
console.log(result);

const value = name - lastName;

console.log(value);

let number3 = '10';
let number4 = '23';

const result2 = number3 - number4;
const result3 = number3 * number4;
const result4 = number3 / number4;
const result5 = number3 + number4; // here only string concat will happen



console.log(result2); 
console.log(result3); 
console.log(result4); 
console.log(result5); 
 


//  JS does the implicit type conversion for us see if we really stored a number in a string if it founds one it just automatically converts it to the number data type and shows us the result of math operation except for addition operation where JS thinks we are doing string concatanation.
