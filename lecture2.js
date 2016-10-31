/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 "returns the position where the NUL character was found"
 \n new line
 "\n creates new-line when inputing data"
 \r carriage return
 "\r  Return just returns the cursor to the beginning of the same line returns the position where the carriage return character was found."
 \v vertical tab
 "it creates a vertical tab and returns the position where the vertical tab character was found"
 \t
 "creates a tab and returns the position where the tab character was found"
 \backspace
" is used to delete characters in a data"
 \f form feed
 "creates a new page and returns the position where the form feed character was found"
 */

 //2. Please combine those two array together as one array by using concate:
var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
var arr2 = ['Thursday', 'Friday', 'Saturday']
arr1.concat(arr2);

//3. Please combine those three array together as one array by only using concate() function once:
var arr1 = ['Sunday', 'Monday']
var arr2 = ['Tuesday', 'Wednesday']
var arr3 = ['Thursday', 'Friday', 'Saturday']
arr1.concat(arr2, arr3);

//4. what is the result(output of following code):
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.sort());
console.log(arr);

["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]


//5. what is the result(output of following code):
var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
console.log(arr.sort());
console.log(arr);

[1, 2, 3, "apple", "black", "orange", "test"]
[1, 2, 3, "apple", "black", "orange", "test"]


//6. Please remove mike, jerry, adn Enoch from the following array by using slice
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
arr.slice(2,4) 
arr.slice(5,6)

['mike', 'jerry']
['Enoch']

//7. what is the result(output of following code):
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-3, -1));
console.log(arr);

['Yaw', 'Enoch']
['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


// 8. what is the result(output of following code):
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 console.log(arr.slice(2));
 console.log(arr);

 ["mike", "jerry", "Yaw", "Enoch", "lars"]
 ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


9. what is the result(output of following code):
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-2));
console.log(arr);

["Enoch", "lars"]
['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']


//10. convert the following function to function expression:
function addTwoNumber (num1, num2) {
 return num1 + num2;
}

//and invoke the function expression to caluate the result of 256 + 532
addTwoNumber(256, 532);


//11. create an immediately invoked function expression
//store the iife within a variable and call it
var iife = (function mest() { 
return 'I am an EIT';
}
);

iife();

//12. you have following objects:
var person1 = {
name: 'ashwin'
};
var person2 = {
name: 'lars'
};
function mester() {
return this.name;
}
//use bind function here to make namer() function to call 'ashwin' and lars

var bindAshwin = mester.bind(person1);
var bindLars = mester.bind(person2);


//12. you have following object:
var number = {
x: 22,
y: 33
};
var count = function() {
console.log(this.x + this.y);
 }
//a. what is the result when we invoke count()?
// b. use bind on function expression to make this work.
//
//a. Invoking count() returns NaN
count.bind(number)();

//13. you have following objects:
var person1 = {
firstName: 'Ashwin',
lastName: 'Yaw'
};

var person2 = {
firstName: 'Lars',
lastName: 'Mike'
};
function hello(greeting) {
console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 //use call methods on function expression to make this work.
//
greeting = 'Good morning';
hello.call(person1);
hello.call(person2);


//14. We have a following string:
var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
//please write a function to change the first letter of every word to upper case.
//
 function ucfirst(str) { 
return str.charAt(0).toUpperCase() + str.substr(1);
}

var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
titleCase(str);