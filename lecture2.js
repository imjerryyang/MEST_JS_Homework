/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line //takes the cursor to a new line on the screen
 \r carriage return //returns the cursor to the beginning of the line
 \v vertical tab //used to speed up printer vertical movement.
 \t //returns a space equivalent to pressing tab
 \backspace
 \f form feed //skips to the beginning of a new page in terminals
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
var concateTwo = arr1.concat(arr2);

/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
 var concateThree = arr1.concat(arr2, arr3);

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */

["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
[1, 2, 3, "apple", "black", "orange", "test"]
[1, 2, 3, "apple", "black", "orange", "test"]

/*
 * 6. Please remove mike, jerry, and Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
var arr1 = arr.slice(0, 2);
var arr2 = arr.slice(4, 5);
var arr3 = arr.slice(6);
var arr4 = arr1.concat(arr2, arr3)
console.log(arr4);

/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */

[ 'Yaw', 'Enoch' ]
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
[ 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
[ 'Enoch', 'lars' ]
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */

var sumOfNumbers = function(num1, num2) {
	return num1 + num2;
}

sumOfNumbers(1,2);

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */

var numberOfGuys = (function counter(num) {
  return count;
})(document.body);

/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */

/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
 
var number = {
 x: 22,
 y: 33
};

 var count = function() {
 	console.log(this.x + this.y);
 }

 count();
 count.bind(number)(); //bind allows us to easily set which specific object will be bound to 'this' when a function or method is invoked.

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */

 var person1 = {
    firstName: 'ashwin',
    lastName: 'Yaw'
};

var person2 = {
    firstName: 'lars',
    lastName: 'Mike'
};
function hello(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

hello.call(person1, "Good evening");
hello.call(person2, "Good afternoon");

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */

var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
var str2 = '';

for (var i = 0; i < str.length; i++) {
	var prev = str[i - 1];
	if (prev === ' ') {
	    str2 += str[i].toUpperCase();
	} else {
        str2 += str[i];
    }
}
console.log(str2);