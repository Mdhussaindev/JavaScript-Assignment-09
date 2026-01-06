// ---------------------------Chapters 35 to 38--------------------------------

// Q1

function showDateTime() {
  var now = new Date();
  document.write(now + "<br>");
}

showDateTime(); 

// Q2

function greetUser(firstName, lastName) {
  var fullName = firstName + " " + lastName;
  alert("Hello " + fullName + "! Welcome");
}


greetUser(
  prompt("Q2: Enter your first name"),
  prompt("Q2: Enter your last name")
);

// Q3

function addNumbers(num1, num2) {
  return num1 + num2;
}


var result = addNumbers(
  +prompt("Q3: Enter first number"),
  +prompt("Q3: Enter second number")
);

alert("Sum of two numbers is: " + result);

// Q4

function calculator(num1, num2, operator) {
  var result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    return "Invalid operator";
  }

  return result;
}


var num1 = +prompt("Q4: Enter first number");
var num2 = +prompt("Q4: Enter second number");
var operator = prompt("Q4: Enter operator (+, -, *, /)");


var answer = calculator(num1, num2, operator);


alert("Result: " + answer);

// Q5

function square(number) {
  return number * number;
}


var num = +prompt("Q5: Enter a number to square");


var result = square(num);


alert("Square of " + num + " is: " + result);


// Q6

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    var result = 1;
    for (var i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

var num = +prompt("Q6: Enter a number to find its factorial");


var fact = factorial(num);


alert("Factorial of " + num + " is: " + fact);

// Q7

function counting(start, end) {
  var result = "";
  for (var i = start; i <= end; i++) {
    result += i + " ";
  }
  return result;
}


var startNum = +prompt("Q7: Enter starting number");
var endNum = +prompt("Q7: Enter ending number");


var countResult = counting(startNum, endNum);

alert("Counting: " + countResult);

// Q8

function calculateHypotenuse(base, perpendicular) {
  function square(x) {
    return x * x;
  }

  return Math.sqrt(square(base) + square(perpendicular));
}


var base = +prompt("Q8: Enter base:");
var perpendicular = +prompt("Q8: Enter perpendicular:");


var hypotenuse = calculateHypotenuse(base, perpendicular);

alert("Hypotenuse: " + hypotenuse);

// Q9

function rectangleArea(width, height) {
    return width * height;
}

let area1 = rectangleArea(5, 10);  
console.log("Area (using values):", area1);


let w = 7;
let h = 12;
let area2 = rectangleArea(w, h);
console.log("Area (using variables):", area2);


// Q10

function isPalindrome(str) {
    
    let cleaned = str.toLowerCase().replace(/\s+/g, '');
    
    let reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
}


console.log(isPalindrome("madam")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man a plan a canal Panama")); 

// Q11

function capitalizeWords(str) {

    let words = str.split(' ');

    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    
    return words.join(' ');
}


let example = 'the quick brown fox';
let results = capitalizeWords(example);
console.log(results); 

// Q12

function findLongestWord(str) {
    
    let words = str.split(' ');

    
    let longest = words[0];

    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}


let examples = "Web Development Tutorial"; 
let longestresult = findLongestWord(examples);
console.log(longestresult); 

// Q13

function countLetter(str, letter) {
    let count = 0;


    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}


let text = 'JSResourceS.com';
let charToCount = 'o';

let result2 = countLetter(text, charToCount);
console.log(`The letter '${charToCount}' occurs ${result2} times.`); 


// Q14

function calcCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    console.log(`The circumference is ${circumference.toFixed(2)}`);
}


function calcArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(`The area is ${area.toFixed(2)}`);
}


let r = 5;

calcCircumference(r); 
calcArea(r);