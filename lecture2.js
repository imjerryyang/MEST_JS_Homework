/*
 * 1. explain the special meaning of the following special characters
 \0 the null characters		  : The null character changes the length
 \n new line				  : Breaks a string and continues it on a new line
 \r carriage return 		  : Returns the cursor to the beginning of the line
 \v vertical tab			  : Creates a vertical spacing between the text before it and the text after it
 \t 						  : Creates a tabspace between the text before it and the text after it
 \backspace                   : Deletes the character before it in a string
 \f form feed			      : Breaks the current page and continues the string on a new page
 */

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
var arr2 = ['Thursday', 'Friday', 'Saturday']
var arr3 = arr1.concat(arr2);
console.log(arr3);


/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
var arr1 = ['Sunday', 'Monday']
var arr2 = ['Tuesday', 'Wednesday']
var arr3 = ['Thursday', 'Friday', 'Saturday']
var arr4 = arr1.concat(arr2, arr3);
console.log(arr4);

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */

// Answer:
// arr will be sorted in ascending order lexicographically

/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */

// Answer:
// arr will be sorted lexicographically and in place at the second line, so the final 
// console.log will print the lexicographically sorted array

/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 arr = arr.slice(0,2)
	 .concat(arr.slice(4,5))
	 .concat(arr = arr.slice(-1))
 console.log(arr)

/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */

 // Answer:
 // ["Yaw", "Enoch"]
 // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */

 // Answer:
 // ["mike", "jerry", "Yaw", "Enoch", "lars"]
 // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */

 // Answer:
 // ["Enoch", "lars"]
 // ["ashwin", "Todd", "mike", "jerry", "Yaw", "Enoch", "lars"]

/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */

 var addTwoNumbers = function(num1, num2) {
 	return num1 + num2
 }

 var result = addTwoNumbers(2, 3)
 console.log(result);


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */

 var theAnswer = (function () {
 	console.log("42, The answer to life the universe and everything!");
 })();

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
 var nameBind = namer.bind(person1);
 console.log(nameBind());
 var nameBind = namer.bind(person2);
 console.log(nameBind());

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

 // Answer:
 // a: NaN
 // b: 
 var number = {
     x: 22,
     y: 33
 };
 var count = function() {
     console.log(this.x + this.y);
 }
 var numberBind = count.bind(number)
 numberBind()

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
	var greeting = "Good morning";
    console.log(greeting + ' ' + this.firstName + '' + this.lastName);
} 

hello.call(person1);
hello.call (person2);

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */

var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
function capitaliseFirstLetter(str) {
	console.log(str.replace(/\b\w/g, x => x.toUpperCase()));
}
capitaliseFirstLetter(str);