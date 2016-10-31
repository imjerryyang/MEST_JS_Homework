/*
 * 1. explain the special meaning of the following special characters
 \0 the null character
 \n new line
 \r carriage return
 \v vertical tab
 \t
 \backspace
 \f form feed
 */
\0 - The null character is a contro; character that has all binary values set to zero, usually used to represent the end of a string.
\n - (new line): This is used to instruct the computer to print subsequen strings/characters on a new line.
\r - (carriage return) : This is used to return a device's cursor to the beginning of the line of text'.
\v - (vertical tab): This is used to move the cursor up or down.
\t - This is used to insert a tab space on a line.
\backspace - This is used to delete a previous character.
\f - (form feed) : This is a control character used to skip to the first line of the next page.
/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
var arr2 = ['Thursday', 'Friday', 'Saturday']
var weekDays = arr1.concat(arr2);
console.log(weekDays);
/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday']
var arr2 = ['Tuesday', 'Wednesday']
var arr3 = ['Thursday', 'Friday', 'Saturday']
var weekDays = arr1.concat(arr2, arr3);
console.log(weekDays);
/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.sort());
console.log(arr); // Here the content of 'arr' has already been sorted and prints the sorted array

(outout):
[ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ]
[ 'Enoch', 'Todd', 'Yaw', 'ashwin', 'jerry', 'lars', 'mike' ]

.sort - alphabeticaly sorts the array content by capitals first, then small letters


/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
console.log(arr.sort());
console.log(arr);

(output):
[ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]
[ 1, 2, 3, 'apple', 'black', 'orange', 'test' ]

.sort - sorts the array content by numbers first
.sort - alphabeticaly sorts the digits
/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(2,3));
console.log(arr.slice(3,4));
console.log(arr.slice(5,6));
/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-3, -1));// This prints Yaw and Enoch as -1 indicates the last index of the array
console.log(arr);

(Output):
[ 'Yaw', 'Enoch' ] //(-3,-1) slices from the last index to the 3rd index from the back of the array
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]// slice method doesnt remove any element from the main array

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */

var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(2));
console.log(arr);

(Output):
[ 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]// The slice method removes the rest of the array starting from index 2
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]]// slice method doesnt remove any element from the main array

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
console.log(arr.slice(-2));
console.log(arr);

(Output):
[ 'Enoch', 'lars' ]
[ 'ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars' ]//The slice method removes the second to the last array and the last array since no 2nd argument was passed

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
var addNumber = function (num1, num2) {
	return num1 + num2;
}

addNumber(256, 532);

/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */
var sum = (function(num1, num2) {
	return num1 + num2;
})(256, 532);

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
var person1 = {
	name: 'ashwin'
};
var person2 = {
	name: 'lars'
};
function namer() {
	return this.name;
}

console.log(namer.bind(person1)());
console.log(namer.bind(person2)());
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

