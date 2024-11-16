// LET VS CONST VS VAR
// using var

var value = "some value"; // global scope works out of function
// it can be redeclared
value = 'some other value'

//using let
let name = "john";  // local scope
// it can't be redeclared
name = 'peter'
// using const

const  lastName = "jordan"; // local scope also it can't be reassign.

console.log(value);
console.log(name);
console.log(lastName);