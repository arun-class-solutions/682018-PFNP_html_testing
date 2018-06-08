// alert("Hello from JavaScript!");

var greeting = "Hello World!";

// Change the variable "greeting" after it has been defined
greeting = "Goodbye World!";

// alert(greeting);

// Set up two numbers represented by variables
var num1 = 2;
var num2 = 3;

// alert(num1 + num2);

var arun = ["Arun", "Sood", "San Francisco", "Instructor"];

// Retrieve "Arun" from array, because arrays start at 0
// alert(arun[0]);

// alert(arun[2]);

// alert(arun[0] + " " + arun[1] + " is an " + arun[3] + " from " + arun[2]);

// Define a function called sayHello
function sayHello(name) {
  alert("Hello " + name + "!");
}

// "Call" or "invoke" or "run" the function sayHello
sayHello("Bob");

sayHello("Susan");

sayHello("Fred");

function addTwo(num1, num2) {
  alert(num1 + num2);
}

addTwo(2, 3);

addTwo(4, 7);

for (var i = 0; i < 20; i++) {
  // Print the value of "i" to the developer console
  console.log(i);
}
